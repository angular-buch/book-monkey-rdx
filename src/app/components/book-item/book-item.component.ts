import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Book } from '../../shared/book';

@Component({
  selector: 'bm-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class BookItemComponent {
  @Input() book: Book;
  @Output() added = new EventEmitter<Book>();
}
