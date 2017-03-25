import { IAppState } from '../../app.state';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { BooksActions, CartActions } from '../../actions';

import { Book } from '../../shared/book';

export function allBooks(state: IAppState) { return state.books.all; }

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  // NOT supported with AOT: @select((state: IAppState) => state.books.all) books$: Observable<Book[]>;
  // AOT ready:
  @select(allBooks) books$: Observable<Book[]>;

  constructor(private books: BooksActions,
              private cart: CartActions) { }

  addBook(book: Book) {
    this.books.addSingle(book);
  }

  addBookToCart(book: Book) {
    this.cart.createSingle(book);
  }
}
