import { Book } from './shared/book';

export interface IAppState {
  books: IBookState;
  card: ICardState;
}

export interface IBookState {
  all: Book[];
}

export interface ICardState {
  items: Book[];
  total: number;
}
