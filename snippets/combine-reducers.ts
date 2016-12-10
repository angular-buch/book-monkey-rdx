import { combineReducers	}	from	'redux';

import { aReducer as a}	from	'./a-reducer';
import { bReducer as b }	from	'./b-reducer';

export const reducer = combineReducers({ a, b });
