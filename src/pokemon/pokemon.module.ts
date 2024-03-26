import { Module } from '@nestjs/common';

// Controllers
import { PokemonController } from './pokemon.controller';

// Models
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

// MongoDB
import { MongooseModule } from '@nestjs/mongoose';

// Services
import { PokemonService } from './pokemon.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pokemon.name,
        schema: PokemonSchema,
      },
    ]),
  ],
  controllers: [PokemonController],
  providers: [PokemonService],
  exports: [MongooseModule],
})
export class PokemonModule {}
