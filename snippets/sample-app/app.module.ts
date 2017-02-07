import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

<TEX>\boldline</TEX>import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';

import { BooksActions } from './actions';

<TEX>\boldline</TEX>import { reducer } from './reducers/index';
<TEX>\boldline</TEX>import { IAppState } from './app.state';

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
<TEX>\boldline</TEX>    this.ngRedux.configureStore(reducer, {} as IAppState);
  }
}
