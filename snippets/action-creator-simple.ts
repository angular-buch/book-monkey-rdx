import { Injectable } from '@angular/core';
<TEX>\boldline</TEX>import { NgRedux } from '@angular-redux/store';

<TEX>\boldline</TEX>@Injectable()
export class CounterActions {
  constructor(private <TEX>\bfseries redux: NgRedux<number></TEX>) {}

  increment() {
<TEX>\boldline</TEX>    this.redux.dispatch({ type: 'INCREMENT_COUNT' });
  }
}
