import { Module } from '@nestjs/common';
import { bookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/library_manager'),
    bookModule,
  ],
})
export class AppModule {}
