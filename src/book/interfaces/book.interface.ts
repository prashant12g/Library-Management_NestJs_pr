import { Document } from 'mongoose';

export interface Ibook extends Document {
  readonly id: number;
  readonly author: string;
  readonly title: string;
  readonly publication: string;
}
