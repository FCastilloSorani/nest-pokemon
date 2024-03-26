import { Module } from '@nestjs/common';

// Controller
import { SeedController } from './seed.controller';

// Modules
import { CommonModule } from '@common/common.module';
import { PokemonModule } from '@pokemon/pokemon.module';

// Services
import { SeedService } from './seed.service';

@Module({
  imports: [CommonModule, PokemonModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
