import { IAppState } from '../../app.state';
import { Component, ChangeDetectionStrategy } from '@angular/core';
<TEX>\bfs</TEX>
import { select } from '@angular-redux/store';<TEX>\bfe</TEX>
import { Observable } from 'rxjs/Observable';
<TEX>\bfs</TEX>
import { BooksActions } from '../../actions';<TEX>\bfe</TEX>

import { Book } from '../../shared/book';

// the same as @select((state: IAppState) => state.books.all) but AOT ready
export function allBooks(state: IAppState) { return state.books.all; }

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],<TEX>\bfs</TEX>
  changeDetection: ChangeDetectionStrategy.OnPush<TEX>\bfe</TEX>
})
export class DashboardComponent {
<TEX>\bfs</TEX>
  @select(allBooks) books$: Observable<Book[]>;<TEX>\bfe</TEX>

  constructor(private <TEX>\bfs</TEX>books: BooksActions<TEX>\bfe</TEX>) { }

  addBook(book: Book) {<TEX>\bfs</TEX>
    this.books.addSingle(book);<TEX>\bfe</TEX>
  }
}
