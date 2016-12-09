import { Injectable } from '@angular/core';

import { NgRedux } from 'ng2-redux';

import { Book } from '../shared/book';

export const ADD_PRODUCT = 'ADD_PRODUCT';

@Injectable()
export	class	CardActions	{
  constructor(private	redux: NgRedux<any>)	{}

  createSingle(book: Book) {
    this.redux.dispatch({ type: ADD_PRODUCT, payload: book });
  }
}
