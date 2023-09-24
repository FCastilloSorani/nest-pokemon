import { NestFactory } from '@nestjs/core';

// Fastify
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

// Modules
import { AppModule } from './app.module';

// Pipes
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Prefix
  app.setGlobalPrefix('api/v2');

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
