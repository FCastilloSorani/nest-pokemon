import { Injectable, NotFoundException } from '@nestjs/common';

// DTOs
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { PaginationDto } from '@common/dto/pagination.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

// Entities
import { Pokemon } from './entities/pokemon.entity';

// Handlers
import { mongooseErrorHandler } from '@common/handlers';

// MongoDB
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async findAll(paginationDto: PaginationDto): Promise<Pokemon[]> {
    const { limit = 10, offset = 0 } = paginationDto;
    return await this.pokemonModel.find().skip(limit).limit(offset);
  }

  async findOne(searchTerm: string): Promise<Pokemon> {
    let pokemon: Pokemon;

    try {
      if (!isNaN(+searchTerm)) {
        pokemon = await this.pokemonModel.findOne({ no: searchTerm });
      }

      if (isValidObjectId(searchTerm)) {
        pokemon = await this.pokemonModel.findById(searchTerm);
      }

      if (!pokemon) {
        pokemon = await this.pokemonModel.findOne({ name: searchTerm });
      }
    } catch (error) {
      mongooseErrorHandler(error);
    }

    if (!pokemon) {
      throw new NotFoundException(
        `Pokemon with ID, name or NO '${searchTerm}' not found`,
      );
    }

    return pokemon;
  }

  async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    try {
      return await this.pokemonModel.create(createPokemonDto);
    } catch (error) {
      mongooseErrorHandler(error);
    }
  }

  async update(
    term: string,
    updatePokemonDto: UpdatePokemonDto,
  ): Promise<void> {
    const pokemon: Pokemon = await this.findOne(term);

    try {
      await pokemon.updateOne(updatePokemonDto);

      return {
        ...pokemon.toJSON(),
        ...updatePokemonDto,
      };
    } catch (error) {
      mongooseErrorHandler(error);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const { deletedCount } = await this.pokemonModel.deleteOne({ _id: id });

      if (!deletedCount) {
        throw new NotFoundException(`Pokemon with ID '${id}' not found`);
      }
    } catch (error) {
      mongooseErrorHandler(error);
    }
  }
}
