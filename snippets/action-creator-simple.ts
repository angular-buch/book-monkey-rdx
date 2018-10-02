import { Injectable } from '@angular/core';<TEX>\bfs</TEX>
import { NgRedux } from '@angular-redux/store';

@Injectable()<TEX>\bfe</TEX>
export class CounterActions {
  constructor(private <TEX>\bfs</TEX>redux: NgRedux<number><TEX>\bfe</TEX>) {}

  increment() {<TEX>\bfs</TEX>
    this.redux.dispatch({ type: 'INCREMENT_COUNT' });<TEX>\bfe</TEX>
  }
}
