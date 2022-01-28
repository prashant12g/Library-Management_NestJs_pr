import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { bookController } from './book.controller';
import { bookService } from './book.service';
import { bookSchema } from './schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'book',
        schema: bookSchema,
      },
    ]),
  ],
  controllers: [bookController],
  providers: [bookService],
})
export class bookModule {}
