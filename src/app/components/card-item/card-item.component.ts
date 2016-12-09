import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Book } from '../../shared/book';

@Component({
  selector: 'bm-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CardItemComponent {

  @Input() item: Book;
  @Output() removed = new EventEmitter<Book>();

}
