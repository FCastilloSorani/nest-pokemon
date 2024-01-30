import {
  BadRequestException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

const logger = new Logger('MongooseErrorHandler');

export function mongooseErrorHandler(error: any) {
  console.log(error);

  logger.error(error);

  if (error.code === 11000) {
    throw new BadRequestException('Object already exists in database');
  }

  throw new InternalServerErrorException(error);
}
