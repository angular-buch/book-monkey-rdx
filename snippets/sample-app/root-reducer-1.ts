/*TEX:\bfs*/
import { combineReducers } from 'redux';/*TEX:\bfe*/

import { IAppState } from '../app.state';/*TEX:\bfs*/
import { booksReducer as books } from './books';/*TEX:\bfe*/

export const reducer = combineReducers<IAppState>({
  books
});
