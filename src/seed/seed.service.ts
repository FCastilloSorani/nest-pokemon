import { Injectable, Logger } from '@nestjs/common';

// Adapters
import { AxiosAdapter } from '@common/adapters/axios.adapter';

// Handlers
import { mongooseErrorHandler } from '@common/handlers';

// Interfaces
import { PokeResponse } from './interfaces/poke-response.interface';

// Entities
import { Pokemon } from '@pokemon/entities/pokemon.entity';

// MongoDB
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  private logger = new Logger('SeedService');

  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async execute(): Promise<void> {
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const mappedPokemons = [];

    for (const { name, url } of data.results) {
      const no: number = +url.split('/').at(-2);
      mappedPokemons.push({ name, no });
    }

    try {
      await this.pokemonModel.insertMany(mappedPokemons);
      this.logger.log('Seed executed');
    } catch (error) {
      mongooseErrorHandler(error);
    }
  }
}
