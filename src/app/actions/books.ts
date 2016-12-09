import { Injectable } from '@angular/core';

import { NgRedux } from 'ng2-redux';

import { Book } from '../shared/book';

export const ADD_BOOK = 'ADD_BOOK';

@Injectable()
export	class	BooksActions	{
  constructor(private	redux:	NgRedux<any>)	{}

  addSingle(book: Book) {
    this.redux.dispatch({ type: ADD_BOOK, payload: book});
  }
}
