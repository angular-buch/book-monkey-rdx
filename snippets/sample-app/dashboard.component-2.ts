// ...
import { BooksActions, CartActions } from '../../actions';

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
<TEX>\boldline</TEX>  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  constructor(private books: BooksActions,
              private <TEX>\bfseries cart: CartActions</TEX>) { }

  // ...

<TEX>\boldline</TEX>  addBookToCart(book: Book) {
<TEX>\boldline</TEX>    this.cart.createSingle(book);
<TEX>\boldline</TEX>  }
}
