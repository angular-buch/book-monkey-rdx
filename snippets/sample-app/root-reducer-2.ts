import { combineReducers } from 'redux';

import { IAppState } from '../app.state';

import { booksReducer as books } from './books';/*TEX:\bfs*/
import { cartReducer as cart } from './cart';/*TEX:\bfe*/

export const reducer = combineReducers<IAppState>({
  books,/*TEX:\bfs*/
  cart/*TEX:\bfe*/
});
