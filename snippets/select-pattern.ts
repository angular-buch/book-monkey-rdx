import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { select } from 'ng2-redux';

@Component({
  selector: 'my-component',
  templateUrl: './my.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {

  /* Einen Reducer selektieren */

  @select() a: Observable<any>;
  // oder
  @select() a$: Observable<any>;
  // oder
  @select('a') a$: Observable<any>;
  // oder
  @select(state => state.a) a$: Observable<any>;

  /*
   * Statusinformationen eines Reducers
   * über Pfade selektieren.
   */

  @select(['a', 'property']) a$: Observable<any>;
  // oder
  @select(state => state.a.property) a$: Observable<any>;
}
