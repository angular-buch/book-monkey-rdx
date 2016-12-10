import { Observable } from 'rxjs';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { select } from 'ng2-redux';

@Component({
  selector: 'my-component',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {

  /* Selektion eines Reducers */

  @select() a: Observable<any>;
  // oder
  @select() a$: Observable<any>;
  // oder
  @select('a') a$: Observable<any>;
  // oder
  @select(state => state.a) a$: Observable<any>;

  /*
   * Statusinformationen eines Redicers
   * über Pfade selektieren.
   */

  @select(['a', 'porperty']) a$: Observable<any>;
  // oder
  @select(state => state.a.property) a$: Observable<any>;
}
