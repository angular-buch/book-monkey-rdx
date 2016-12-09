import { IAppState } from './../../app.state';
import { Component } from '@angular/core';

import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs';

import { BooksActions, CardActions } from '../../actions';

import { Book } from '../../shared/book';

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @select((state: IAppState) => state.books.all) books$: Observable<Book[]>;

  constructor(private store: NgRedux<any>,
              private books: BooksActions,
              private card: CardActions) { }

  addBook(book: Book) {
    this.books.addSingle(book);
  }

  addBookToCard(book: Book) {
    this.card.createSingle(book);
  }
}
