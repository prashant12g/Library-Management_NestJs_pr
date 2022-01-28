import * as mongoose from 'mongoose';

export const bookSchema = new mongoose.Schema({
  id: Number,
  author: String,
  title: String,
  publication: String,
});
