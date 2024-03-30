// Enums
import { Environment } from './env.enum';

// Interfaces
import { EnvironmentVariables } from './env.interface';

const { env } = process;

export const EnvironmentConfiguration = (): EnvironmentVariables => ({
  environment: env.NODE_ENV || Environment.Development,
  mongodb: env.MONGODB_URI,
  port: +env.PORT || 3000,
  pagination: {
    defaultLimit: +env.DEFAULT_LIMIT || 10,
  },
});
