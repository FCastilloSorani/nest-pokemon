import { Module } from '@nestjs/common';

// Config
import { STATIC_CONFIG } from './config/static.config';

// Modules
import { PokemonModule } from './pokemon/pokemon.module';

// Static
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [PokemonModule, ServeStaticModule.forRoot(STATIC_CONFIG)],
})
export class AppModule {}
