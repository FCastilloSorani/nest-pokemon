import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

// Mongoose
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string) {
    if (!isValidObjectId(value)) {
      throw new BadRequestException(`Value '${value}' is not valid Mongo ID`);
    }

    return value;
  }
}
