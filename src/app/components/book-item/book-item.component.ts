import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../../shared/book';

@Component({
  selector: 'bm-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input() book: Book;
  @Output() added = new EventEmitter<Book>();
}
