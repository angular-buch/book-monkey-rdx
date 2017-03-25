import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../app.state';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { select } from '@angular-redux/store';

import { CartActions } from '../../actions/cart';
import { Book } from '../../shared/book';

export function cartTotal(state: IAppState) { return state.cart.total; }
export function cartItems(state: IAppState) { return state.cart.items; }

@Component({
  selector: 'bm-cart',
  templateUrl: 'cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  @select(cartTotal) total$: Observable<number>;
  @select(cartItems) items$: Observable<Book[]>;

  constructor(private cart: CartActions) { }

  removeItemFromCart(book: Book) {
    this.cart.removeSingle(book);
  }
}
