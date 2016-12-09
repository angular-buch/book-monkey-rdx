import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule, DevToolsExtension } from 'ng2-redux';

import { AppComponent } from './app.component';

import { BooksActions, CardActions } from './actions';

import { BookFormComponent } from './components/book-form/book-form.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    DashboardComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule.forRoot()
  ],
  providers: [
    BooksActions,
    CardActions,
    DevToolsExtension
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
