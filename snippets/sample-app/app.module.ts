import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*TEX:\bfs*/
import { NgRedux, NgReduxModule } from '@angular-redux/store';/*TEX:\bfe*/

import { AppComponent } from './app.component';

import { BooksActions } from './actions';
/*TEX:\bfs*/
import { reducer } from './reducers/index';
import { IAppState } from './app.state';/*TEX:\bfe*/

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [BooksActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>) {/*TEX:\bfs*/
    this.ngRedux.configureStore(reducer, {} as IAppState);/*TEX:\bfe*/
  }
}
