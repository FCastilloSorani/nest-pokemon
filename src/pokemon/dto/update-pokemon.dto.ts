import { PartialType } from '@nestjs/mapped-types';

// DTOs
import { CreatePokemonDto } from './create-pokemon.dto';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
