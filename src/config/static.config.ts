import { ServeStaticModuleOptions } from '@nestjs/serve-static';

// Path
import { join } from 'path';

export const ServeStaticConfig: ServeStaticModuleOptions = {
  rootPath: join(__dirname, '..', '..', 'public'),
};
