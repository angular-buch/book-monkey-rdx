import { Component, ChangeDetectionStrategy } from '@angular/core';

<TEX>\boldline</TEX>import { BooksActions } from '../actions';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
<TEX>\boldline</TEX>  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  constructor(private <TEX>\bfseries books: BooksActions</TEX>) { }

  addBook(book: Book) {
<TEX>\boldline</TEX>    this.books.addSingle(book);
  }
}
