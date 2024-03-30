import { IsEnum, IsNumber, IsString, Max, Min } from 'class-validator';

// Enums
import { Environment } from './env.enum';

export class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsString()
  MONGODB_URI: string;

  @IsNumber()
  @Min(0)
  @Max(65535)
  PORT: number;

  @IsNumber()
  @Min(0)
  DEFAULT_LIMIT: number;
}
