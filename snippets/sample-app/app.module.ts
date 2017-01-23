import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgRedux, NgReduxModule } from 'ng2-redux';

import { AppComponent } from './app.component';

import { BooksActions } from './actions';

import { reducer } from './reducers/index';
import { IAppState } from './app.state';

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
  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.configureStore(reducer, {} as IAppState);
  }
}
