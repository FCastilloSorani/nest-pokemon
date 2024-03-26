import { Module } from '@nestjs/common';

// Config
import { STATIC_CONFIG } from './config/static.config';

// Modules
import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';

// MongoDB
import { MongooseModule } from '@nestjs/mongoose';

// Static
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    PokemonModule,
    SeedModule,
    ServeStaticModule.forRoot(STATIC_CONFIG),
  ],
})
export class AppModule {}
