// ...
import { NgReduxModule, DevToolsExtension, NgRedux } from 'ng2-redux';


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

    if (environment.production === false) {
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
