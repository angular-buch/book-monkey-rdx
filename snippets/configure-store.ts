import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { reducer } from './reducers/index';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(ngRedux: NgRedux<any>) {
    ngRedux.configureStore(reducer, {});
  }
}
