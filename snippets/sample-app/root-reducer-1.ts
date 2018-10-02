<TEX>\bfs</TEX>
import { combineReducers } from 'redux';<TEX>\bfe</TEX>

import { IAppState } from '../app.state';<TEX>\bfs</TEX>
import { booksReducer as books } from './books';<TEX>\bfe</TEX>

export const reducer = combineReducers<IAppState>({
  books
});
