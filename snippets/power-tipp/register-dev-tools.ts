// ...
import { NgReduxModule, DevToolsExtension, NgRedux } from '@angular-redux/store';


@NgModule({
  // ...
  imports: [
    // ...
    NgReduxModule
  ],
  providers: [
    // .../*TEX:\bfs*/
    DevToolsExtension/*TEX:\bfe*/
  ]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
              private /*TEX:\bfs*/devTools: DevToolsExtension/*TEX:\bfe*/) {
    let enhancers = [];

    if (environment.production === false &&
        /*TEX:\bfs*/ devTools.isEnabled()/*TEX:\bfe*/) {
      enhancers = [...enhancers, devTools.enhancer()];
    }

    this.ngRedux.configureStore(
      reducer,
      {} as IAppState,
      [],/*TEX:\bfs*/
      enhancers/*TEX:\bfe*/
    );
  }
}
