export interface EnvironmentVariables {
  environment: string;
  mongodb: string;
  port: number;
  pagination: {
    defaultLimit: number;
  };
}
