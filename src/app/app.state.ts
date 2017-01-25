import { Book } from './shared/book';

export interface IAppState {
  books: IBookState;
  cart: ICartState;
}

export interface IBookState {
  all: Book[];
}

export interface ICartState {
  items: Book[];
  total: number;
}
