import { IBookState } from '../app.state';
import { ADD_BOOK } from '../actions/books';

const INITIAL_STATE: IBookState = {
  all: []
};

export function booksReducer(state = INITIAL_STATE, action): IBookState {
  switch (action.type) {
    case ADD_BOOK:
      return { all: [...state.all, action.payload] };
    default:
      return state;
  }
}
