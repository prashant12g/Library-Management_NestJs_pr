import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { bookService } from './book.service';
import { bookDto } from './book.dto';

@Controller('book')
export class bookController {
  constructor(private bookService: bookService) {}

  // get endPoint for to get list of all books
  @Get()
  public async getbooks() {
    return this.bookService.getbooks();
  }

  // post endPoint for the book
  @Post()
  public async postbook(@Body() book: bookDto) {
    return this.bookService.postbook(book);
  }

  // get endPoint for a specific book using Id
  @Get(':id')
  public async getbookById(@Param('id') id: number) {
    return this.bookService.getbookById(id);
  }
}
