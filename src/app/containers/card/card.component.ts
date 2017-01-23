import { Observable } from 'rxjs/Observable';
import { IAppState } from './../../app.state';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { select } from 'ng2-redux';

import { CardActions } from '../../actions/card';
import { Book } from '../../shared/book';

@Component({
  selector: 'bm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent{
  @select((state: IAppState) => state.card.total) total$: Observable<number>;
  @select((state: IAppState) => state.card.items) items$: Observable<Book[]>;

  constructor(private card: CardActions) { }

  removeItemFromCard(book: Book) {
    this.card.removeSingle(book);
  }
}
