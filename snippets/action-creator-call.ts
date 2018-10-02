import { Component, ChangeDetectionStrategy } from '@angular/core';
<TEX>\bfs</TEX>
import { BooksActions } from '../actions';<TEX>\bfe</TEX>
import { Book } from '../shared/book';

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',<TEX>\bfs</TEX>
  changeDetection: ChangeDetectionStrategy.OnPush<TEX>\bfe</TEX>
})
export class DashboardComponent {<TEX>\bfs</TEX>
  constructor(private <TEX>\bfs</TEX>books: BooksActions<TEX>\bfe</TEX>) { }<TEX>\bfe</TEX>

  addBook(book: Book) {<TEX>\bfs</TEX>
    this.books.addSingle(book);<TEX>\bfe</TEX>
  }
}
