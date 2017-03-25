import { IAppState } from '../../app.state';
import { Component, ChangeDetectionStrategy } from '@angular/core';

<TEX>\boldline</TEX>import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

<TEX>\boldline</TEX>import { BooksActions } from '../../actions';

import { Book } from '../../shared/book';

// the same as @select((state: IAppState) => state.books.all) but AOT ready
export function allBooks(state: IAppState) { return state.books.all; }

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
<TEX>\boldline</TEX>  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

<TEX>\boldline</TEX>  @select(allBooks) books$: Observable<Book[]>;

  constructor(private <TEX>\bfseries books: BooksActions</TEX>) { }

  addBook(book: Book) {
<TEX>\boldline</TEX>    this.books.addSingle(book);
  }
}
