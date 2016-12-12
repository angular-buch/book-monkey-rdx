import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Injectable()
export class CounterActions {
  constructor(private	redux: NgRedux<number>) {}

  increment() {
    this.redux.dispatch({ type: 'INCREMENT_COUNT' });
  }
}
