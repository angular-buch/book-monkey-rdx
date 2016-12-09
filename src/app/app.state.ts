
import { Book } from './shared/book';
import { BookProduct } from './shared/bookProduct';

export interface IAppState {
  books: IBookState;
  card: ICardState;
}

export interface IBookState {
  all: Book[];
}

export interface ICardState {
  products: BookProduct[];
}
