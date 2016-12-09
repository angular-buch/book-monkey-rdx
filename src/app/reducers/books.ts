import { ADD_BOOK } from '../actions/books';

export function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
}
