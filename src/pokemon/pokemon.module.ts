import { Module } from '@nestjs/common';

// Controllers
import { PokemonController } from './pokemon.controller';

// Services
import { PokemonService } from './pokemon.service';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
