import { ICardState } from './../app.state';
import { ADD_PRODUCT } from './../actions/card';

const INITIAL_STATE: ICardState = {
  products: []
};

export function cardReducer(state = INITIAL_STATE, action): ICardState {
  switch (action.type) {
    case ADD_PRODUCT:
      return { products: [...state.products, action.payload] };
    default:
      return state;
  }
}
