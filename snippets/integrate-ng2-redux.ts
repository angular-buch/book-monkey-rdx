import { NgModule } from '@angular/core';

import { NgReduxModule } from 'ng2-redux';

import { AppComponent } from './app.component';

import { BooksActions } from './actions';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    /* andere Imports */
    NgReduxModule.forRoot()
  ],
  providers: [
    BooksActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
