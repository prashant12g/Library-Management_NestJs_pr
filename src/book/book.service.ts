import { Injectable, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Ibook } from './interfaces/book.interface';
import { bookDto } from './book.dto';

// projection is avoid certain fields in response
const bookProjection = {
  __v: false,
  _id: false,
};

@Injectable()
export class bookService {
  constructor(@InjectModel('book') private readonly bookModel: Model<Ibook>) {}

  // get endPoint to fetch list of all books
  public async getbooks(): Promise<bookDto[]> {
    const books = await this.bookModel.find({}, bookProjection).exec();
    if (!books || !books[0]) {
      throw new HttpException('Not Found', 404);
    }
    return books;
  }

  // post endPoint to post a new book
  public async postbook(newbook: bookDto) {
    const book = await this.bookModel(newbook);
    return book.save();
  }

  // get endPoint to get a specific book using Id
  public async getbookById(id: number): Promise<bookDto> {
    const book = await this.bookModel.findOne({ id }, bookProjection).exec();
    // checking if the book with the given id is not find/exist
    if (!book) {
      throw new HttpException('Not Found', 404);
    }
    return book;
  }
}
