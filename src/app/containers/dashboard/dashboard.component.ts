import { IAppState } from './../../app.state';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { BooksActions, CardActions } from '../../actions';

import { Book } from '../../shared/book';

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  @select((state: IAppState) => state.books.all) books$: Observable<Book[]>;

  constructor(private books: BooksActions,
              private card: CardActions) { }

  addBook(book: Book) {
    this.books.addSingle(book);
  }

  addBookToCard(book: Book) {
    this.card.createSingle(book);
  }
}
