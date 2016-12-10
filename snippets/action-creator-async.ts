import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgRedux } from 'ng2-redux';

@Injectable()
export class	CounterActions	{
  constructor(private	redux:	NgRedux<number>)	{}

  incrementAsync() {
    Observable.timer(2000).subscribe(() => {
      this.redux.dispatch({ type: 'INCREMENT_COUNT' });
    });
  }
}