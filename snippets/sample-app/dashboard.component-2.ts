// ...
import { BooksActions, CartActions } from '../../actions';

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  constructor(private books: BooksActions,
              private cart: CartActions) { }

  // ...

  addBookToCart(book: Book) {
    this.cart.createSingle(book);
  }
}
