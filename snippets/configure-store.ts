// ...
<TEX>\bfs</TEX>
import {NgReduxModule, NgRedux} from '@angular-redux/store';<TEX>\bfe</TEX>

@NgModule({
  // ...
  imports: [
    // ...<TEX>\bfs</TEX>
    NgReduxModule<TEX>\bfe</TEX>
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<any>) {<TEX>\bfs</TEX>
    this.ngRedux.configureStore(reducer, {});<TEX>\bfe</TEX>
  }
}
