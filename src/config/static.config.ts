import { ServeStaticModuleOptions } from '@nestjs/serve-static';

// Path
import { join } from 'path';

export const STATIC_CONFIG: ServeStaticModuleOptions = {
  rootPath: join(__dirname, '..', '..', 'public'),
};
