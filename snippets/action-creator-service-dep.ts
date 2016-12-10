import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Injectable()
export class	BookActions	{
  constructor(
    private	redux: NgRedux<number>,
    private bs: BookStoreService)	{ }

  getBooks() {
    this.bs.getAll().subscribe((books: Book[]) => {
      this.redux.dispatch({ type: 'INCREMENT_COUNT', playload: books });
    });
  }
}
