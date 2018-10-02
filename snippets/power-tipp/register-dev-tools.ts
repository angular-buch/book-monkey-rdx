// ...
import { NgReduxModule, DevToolsExtension, NgRedux } from '@angular-redux/store';


@NgModule({
  // ...
  imports: [
    // ...
    NgReduxModule
  ],
  providers: [
    // ...<TEX>\bfs</TEX>
    DevToolsExtension<TEX>\bfe</TEX>
  ]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
              private <TEX>\bfs</TEX>devTools: DevToolsExtension<TEX>\bfe</TEX>) {
    let enhancers = [];

    if (environment.production === false &&
        <TEX>\bfs</TEX> devTools.isEnabled()<TEX>\bfe</TEX>) {
      enhancers = [...enhancers, devTools.enhancer()];
    }

    this.ngRedux.configureStore(
      reducer,
      {} as IAppState,
      [],<TEX>\bfs</TEX>
      enhancers<TEX>\bfe</TEX>
    );
  }
}
