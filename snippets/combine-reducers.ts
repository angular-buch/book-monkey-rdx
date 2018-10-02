<TEX>\bfs</TEX>
import { combineReducers } from 'redux';<TEX>\bfe</TEX>

import { aReducer as a } from './a-reducer';
import { bReducer as b } from './b-reducer';
<TEX>\bfs</TEX>
export const reducer = combineReducers({ a, b });<TEX>\bfe</TEX>
