// ...
import { BooksActions, CartActions } from '../../actions';

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],/*TEX:\bfs*/
  changeDetection: ChangeDetectionStrategy.OnPush/*TEX:\bfe*/
})
export class DashboardComponent {

  constructor(private books: BooksActions,
              private /*TEX:\bfs*/cart: CartActions/*TEX:\bfe*/) { }

  // ...
/*TEX:\bfs*/
  addBookToCart(book: Book) {
    this.cart.createSingle(book);
  }/*TEX:\bfs*/
}
