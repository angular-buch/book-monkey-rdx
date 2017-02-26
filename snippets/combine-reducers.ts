<TEX>\boldline</TEX>import { combineReducers } from 'redux';

import { aReducer as a } from './a-reducer';
import { bReducer as b } from './b-reducer';

<TEX>\boldline</TEX>export const reducer = combineReducers({ a, b });
