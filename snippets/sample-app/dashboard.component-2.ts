// ...
import { BooksActions, CardActions } from '../../actions';

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  constructor(private books: BooksActions,
              private card: CardActions) { }

  // ...

  addBookToCard(book: Book) {
    this.card.createSingle(book);
  }
}
