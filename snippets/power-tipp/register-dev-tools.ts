// ...
import { NgReduxModule, DevToolsExtension, NgRedux } from '@angular-redux/store';


@NgModule({
  // ...
  imports: [
    // ...
    NgReduxModule
  ],
  providers: [
    // ...
<TEX>\boldline</TEX>    DevToolsExtension
  ]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
              private <TEX>\bfseries devTools: DevToolsExtension</TEX>) {
    let enhancers = [];

    if (environment.production === false &&
        <TEX>\bfseries  devTools.isEnabled()</TEX>) {
      enhancers = [...enhancers, devTools.enhancer()];
    }

    this.ngRedux.configureStore(
      reducer,
      {} as IAppState,
      [],
<TEX>\boldline</TEX>      enhancers
    );
  }
}
