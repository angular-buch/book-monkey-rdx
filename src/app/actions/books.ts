import { Injectable } from '@angular/core';

import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../app.state';
import { Book } from '../shared/book';

export const ADD_BOOK = 'ADD_BOOK';

@Injectable()
export class BooksActions {
  constructor(private redux: NgRedux<IAppState>) {}

  addSingle(book: Book) {
    this.redux.dispatch({ type: ADD_BOOK, payload: book});
  }
}
