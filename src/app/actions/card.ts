import { Injectable } from '@angular/core';

import { NgRedux } from 'ng2-redux';

import { IAppState } from '../app.state';
import { Book } from '../shared/book';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

@Injectable()
export	class	CardActions	{
  constructor(private	redux: NgRedux<IAppState>)	{}

  createSingle(book: Book) {
    this.redux.dispatch({ type: ADD_ITEM, payload: book });
  }

  removeSingle(book: Book) {
    this.redux.dispatch({ type: REMOVE_ITEM, payload: book});
  }
}
