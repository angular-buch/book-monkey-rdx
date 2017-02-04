import { combineReducers } from 'redux';

import { IAppState } from './../app.state';
import { booksReducer as books } from './books';

export const reducer = combineReducers<IAppState>({
  books
});
