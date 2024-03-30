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

// Services
import { ConfigService } from '@nestjs/config';

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

  // Configuration
  const configService = app.get(ConfigService);
  const port: number = configService.get<number>('port');

  console.log(`Listening on port ${port}`);

  await app.listen(port, '0.0.0.0');
}
bootstrap();
