<TEX>\boldline</TEX>import { combineReducers } from 'redux';

import { IAppState } from '../app.state';
<TEX>\boldline</TEX>import { booksReducer as books } from './books';

export const reducer = combineReducers<IAppState>({
  books
});
