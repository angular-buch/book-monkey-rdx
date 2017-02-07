// ...

<TEX>\boldline</TEX>import {NgReduxModule, NgRedux} from '@angular-redux/store';

@NgModule({
  // ...
  imports: [
    // ...
<TEX>\boldline</TEX>    NgReduxModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<any>) {
<TEX>\boldline</TEX>    this.ngRedux.configureStore(reducer, {});
  }
}
