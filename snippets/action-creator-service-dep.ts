import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Injectable()
export class BookActions {
  constructor(
    private redux: NgRedux<any>,
    private bs: BookStoreService) { }

  getBooks() {
    this.bs.getAll().subscribe((books: Book[]) => {
<TEX>\boldline</TEX>      this.redux.dispatch({ type: 'BOOKS_LOADED', payload: books });
    });
  }
}
