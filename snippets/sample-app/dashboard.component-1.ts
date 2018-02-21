import { IAppState } from '../../app.state';
import { Component, ChangeDetectionStrategy } from '@angular/core';
/*TEX:\bfs*/
import { select } from '@angular-redux/store';/*TEX:\bfe*/
import { Observable } from 'rxjs/Observable';
/*TEX:\bfs*/
import { BooksActions } from '../../actions';/*TEX:\bfe*/

import { Book } from '../../shared/book';

// the same as @select((state: IAppState) => state.books.all) but AOT ready
export function allBooks(state: IAppState) { return state.books.all; }

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],/*TEX:\bfs*/
  changeDetection: ChangeDetectionStrategy.OnPush/*TEX:\bfe*/
})
export class DashboardComponent {
/*TEX:\bfs*/
  @select(allBooks) books$: Observable<Book[]>;/*TEX:\bfe*/

  constructor(private /*TEX:\bfs*/books: BooksActions/*TEX:\bfe*/) { }

  addBook(book: Book) {/*TEX:\bfs*/
    this.books.addSingle(book);/*TEX:\bfe*/
  }
}
