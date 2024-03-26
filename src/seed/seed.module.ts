import { Module } from '@nestjs/common';

// Controller
import { SeedController } from './seed.controller';

// Services
import { SeedService } from './seed.service';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
