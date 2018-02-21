import { NgModule } from '@angular/core';/*TEX:\bfs*/
import { NgReduxModule } from '@angular-redux/store';/*TEX:\bfe*/

import { AppComponent } from './app.component';
import { BooksActions } from './actions';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    /* andere Imports */ /*TEX:\bfs*/
    NgReduxModule.forRoot()/*TEX:\bfe*/
  ],
  providers: [
    BooksActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
