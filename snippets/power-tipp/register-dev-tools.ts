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
    DevToolsExtension
  ]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
              private devTools: DevToolsExtension) {
    let enhancers = [];

    if (environment.production === false &&
        devTools.isEnabled()) {
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
