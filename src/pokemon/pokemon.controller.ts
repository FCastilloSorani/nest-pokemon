import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';

// DTOs
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

// Entities
import { Pokemon } from './entities/pokemon.entity';

// Pipes
import { ParseMongoIdPipe } from '@common/pipes';

// Services
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async findAll(): Promise<Pokemon[]> {
    return await this.pokemonService.findAll();
  }

  @Get(':searchTerm')
  async findOne(@Param('searchTerm') searchTerm: string): Promise<Pokemon> {
    return await this.pokemonService.findOne(searchTerm);
  }

  @Post()
  async create(@Body() createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    return await this.pokemonService.create(createPokemonDto);
  }

  @Patch(':term')
  async update(
    @Param('term') term: string,
    @Body() updatePokemonDto: UpdatePokemonDto,
  ): Promise<void> {
    return await this.pokemonService.update(term, updatePokemonDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseMongoIdPipe) id: string): Promise<void> {
    return await this.pokemonService.remove(id);
  }
}
