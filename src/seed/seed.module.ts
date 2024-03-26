import { Module } from '@nestjs/common';

// Controller
import { SeedController } from './seed.controller';

// Modules
import { PokemonModule } from '@pokemon/pokemon.module';

// Services
import { SeedService } from './seed.service';

@Module({
  imports: [PokemonModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
