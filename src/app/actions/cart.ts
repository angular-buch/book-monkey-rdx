import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../app.state';
import { Book } from '../shared/book';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

import 'rxjs/add/observable/timer';

@Injectable()
export class CartActions	{
  constructor(private redux: NgRedux<IAppState>) { }

  createSingle(book: Book) {
    this.redux.dispatch({ type: ADD_ITEM, payload: book });
  }

  removeSingle(book: Book) {
    Observable.timer(2000).subscribe(() => {
      this.redux.dispatch({ type: REMOVE_ITEM, payload: book});
    });
  }
}
