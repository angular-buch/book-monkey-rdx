// ...
/*TEX:\bfs*/
import {NgReduxModule, NgRedux} from '@angular-redux/store';/*TEX:\bfe*/

@NgModule({
  // ...
  imports: [
    // .../*TEX:\bfs*/
    NgReduxModule/*TEX:\bfe*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<any>) {/*TEX:\bfs*/
    this.ngRedux.configureStore(reducer, {});/*TEX:\bfe*/
  }
}
