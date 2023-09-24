import { NestFactory } from '@nestjs/core';

// Fastify
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

// Modules
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // Global prefix
  app.setGlobalPrefix('api/v2');

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
