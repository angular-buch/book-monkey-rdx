import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgReduxModule, DevToolsExtension, NgRedux} from 'ng2-redux';

import { AppComponent } from './app.component';

import { BooksActions, CardActions } from './actions';

import { BookFormComponent } from './components/book-form/book-form.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { CardItemComponent } from './components/card-item/card-item.component';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { CardComponent } from './containers/card/card.component';
import { reducer } from './reducers/index';
import { IAppState } from './app.state';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    DashboardComponent,
    BookItemComponent,
    CardComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [
    BooksActions,
    CardActions,
    DevToolsExtension
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
              private devTools: DevToolsExtension) {
    let enhancers = [devTools.enhancer()];

    this.ngRedux.configureStore(
      reducer,
      {} as IAppState,
      [],
      enhancers
    );
  }
}
