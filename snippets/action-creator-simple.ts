import { Injectable } from '@angular/core';/*TEX:\bfs*/
import { NgRedux } from '@angular-redux/store';

@Injectable()/*TEX:\bfe*/
export class CounterActions {
  constructor(private /*TEX:\bfs*/redux: NgRedux<number>/*TEX:\bfe*/) {}

  increment() {/*TEX:\bfs*/
    this.redux.dispatch({ type: 'INCREMENT_COUNT' });/*TEX:\bfe*/
  }
}
