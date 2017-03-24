import { combineReducers } from 'redux';

import { IAppState } from '../app.state';

import { booksReducer as books } from './books';
<TEX>\boldline</TEX>import { cartReducer as cart } from './cart';

export const reducer = combineReducers<IAppState>({
  books,
<TEX>\boldline</TEX>  cart
});
