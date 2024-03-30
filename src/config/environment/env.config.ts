import { Environment } from './env.enum';

const { env } = process;

export const EnvironmentConfiguration = () => ({
  environment: env.NODE_ENV || Environment.Development,
  mongodb: env.MONGODB_URI,
  port: +env.PORT || 3000,
  pagination: {
    defaultLimit: +env.DEFAULT_LIMIT || 10,
  },
});
