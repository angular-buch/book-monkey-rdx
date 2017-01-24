import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Book } from '../../shared/book';

@Component({
  selector: 'bm-book-item',
  templateUrl: './book-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ['.ui.card.book { margin-bottom:8px; }']
})
export class BookItemComponent {
  @Input() book: Book;
  @Output() added = new EventEmitter<Book>();
}
