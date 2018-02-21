import { Component, ChangeDetectionStrategy } from '@angular/core';
/*TEX:\bfs*/
import { BooksActions } from '../actions';/*TEX:\bfe*/
import { Book } from '../shared/book';

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',/*TEX:\bfs*/
  changeDetection: ChangeDetectionStrategy.OnPush/*TEX:\bfe*/
})
export class DashboardComponent {/*TEX:\bfs*/
  constructor(private /*TEX:\bfs*/books: BooksActions/*TEX:\bfe*/) { }/*TEX:\bfe*/

  addBook(book: Book) {/*TEX:\bfs*/
    this.books.addSingle(book);/*TEX:\bfe*/
  }
}
