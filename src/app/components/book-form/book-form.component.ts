import { Component, Output, EventEmitter } from '@angular/core';

import { Book } from '../../shared/book';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  @Output() created = new EventEmitter<Book>();

  submitted(form) {
    this.created.emit(new Book(
      form.controls['isbn'].value,
      form.controls['title'].value
    ));
  }
}
