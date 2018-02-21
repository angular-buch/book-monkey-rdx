/*TEX:\bfs*/
import { combineReducers } from 'redux';/*TEX:\bfe*/

import { aReducer as a } from './a-reducer';
import { bReducer as b } from './b-reducer';
/*TEX:\bfs*/
export const reducer = combineReducers({ a, b });/*TEX:\bfe*/
