import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';

@Injectable()
export class CounterActions {
  constructor(private redux: NgRedux<number>) { }

  incrementAsync() {
<TEX>\boldline</TEX>    Observable.timer(2000).subscribe(() => {
      this.redux.dispatch({ type: 'INCREMENT_COUNT' });
    });
  }
}
