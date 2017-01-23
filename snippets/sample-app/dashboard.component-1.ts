import { IAppState } from './../../app.state';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { BooksActions } from '../../actions';

import { Book } from '../../shared/book';

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  @select((state: IAppState) => state.books.all) books$: Observable<Book[]>;

  constructor(private books: BooksActions) { }

  addBook(book: Book) {
    this.books.addSingle(book);
  }
}
