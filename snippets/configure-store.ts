import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

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
