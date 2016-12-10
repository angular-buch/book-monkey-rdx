import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BooksActions } from '../actions';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  constructor(private books: BooksActions) { }

  addBook(book: Book) {
    this.books.addSingle(book);
  }
}
