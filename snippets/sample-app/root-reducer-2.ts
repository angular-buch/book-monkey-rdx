import { combineReducers } from 'redux';

import { IAppState } from '../app.state';

import { booksReducer as books } from './books';<TEX>\bfs</TEX>
import { cartReducer as cart } from './cart';<TEX>\bfe</TEX>

export const reducer = combineReducers<IAppState>({
  books,<TEX>\bfs</TEX>
  cart<TEX>\bfe</TEX>
});
