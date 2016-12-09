import	{	combineReducers	}	from	'redux';

import { IAppState } from './../app.state';

import { booksReducer as books}	from	'./books';
import { cardReducer as card }	from	'./card';

export const reducer = combineReducers<IAppState>({
  books,
  card
});
