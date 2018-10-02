// ...
import { BooksActions, CartActions } from '../../actions';

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],<TEX>\bfs</TEX>
  changeDetection: ChangeDetectionStrategy.OnPush<TEX>\bfe</TEX>
})
export class DashboardComponent {

  constructor(private books: BooksActions,
              private <TEX>\bfs</TEX>cart: CartActions<TEX>\bfe</TEX>) { }

  // ...
<TEX>\bfs</TEX>
  addBookToCart(book: Book) {
    this.cart.createSingle(book);
  }<TEX>\bfs</TEX>
}
