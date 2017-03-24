import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule, DevToolsExtension, NgRedux } from '@angular-redux/store';

import { AppComponent } from './app.component';

import { BooksActions, CartActions } from './actions';

import { BookFormComponent } from './components/book-form/book-form.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { CartComponent } from './containers/cart/cart.component';
import { reducer } from './reducers/index';
import { IAppState } from './app.state';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    DashboardComponent,
    BookItemComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [
    BooksActions,
    CartActions,
    DevToolsExtension
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
              private devTools: DevToolsExtension) {
    let enhancers = [];

    if (devTools.isEnabled()) {
      enhancers = [...enhancers, devTools.enhancer()];
    }

    this.ngRedux.configureStore(
      reducer,
      {} as IAppState,
      [],
      enhancers
    );
  }
}
