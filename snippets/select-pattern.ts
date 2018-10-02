import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
<TEX>\bfs</TEX>
import { select } from '@angular-redux/store';<TEX>\bfe</TEX>

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
  // oder<TEX>\bfs</TEX>
  @select(state => state.a) a$: Observable<any>;<TEX>\bfe</TEX>

  /*
   * Statusinformationen eines Reducers
   * über Pfade selektieren.
   */

  @select(['a', 'property']) a$: Observable<any>;
  // oder<TEX>\bfs</TEX>
  @select(state => state.a.property) a$: Observable<any>;<TEX>\bfe</TEX>
}
