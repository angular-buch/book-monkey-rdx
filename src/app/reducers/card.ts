import { ADD_PRODUCT } from './../actions/card';

export function cardReducer(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
}
