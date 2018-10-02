import { NgModule } from '@angular/core';<TEX>\bfs</TEX>
import { NgReduxModule } from '@angular-redux/store';<TEX>\bfe</TEX>

import { AppComponent } from './app.component';
import { BooksActions } from './actions';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    /* andere Imports */ <TEX>\bfs</TEX>
    NgReduxModule.forRoot()<TEX>\bfe</TEX>
  ],
  providers: [
    BooksActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
