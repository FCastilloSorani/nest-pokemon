import { Module } from '@nestjs/common';

// Config
import { EnvironmentConfiguration, validate } from './config/environment';
import { ServeStaticConfig } from './config';

// Modules
import { ConfigModule } from '@nestjs/config';
import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';

// MongoDB
import { MongooseModule } from '@nestjs/mongoose';

// Static
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      validate,
      load: [EnvironmentConfiguration],
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      dbName: 'pokemons',
    }),
    PokemonModule,
    SeedModule,
    ServeStaticModule.forRoot(ServeStaticConfig),
  ],
})
export class AppModule {}
