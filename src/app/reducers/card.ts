import { ICardState } from './../app.state';
import { ADD_ITEM, REMOVE_ITEM } from './../actions/card';

const INITIAL_STATE: ICardState = {
  items: [],
  total: 0
};

export function cardReducer(state = INITIAL_STATE, action): ICardState {
  switch (action.type) {
    case ADD_ITEM:
      const enhanced = [...state.items, action.payload];

      return {
        items: enhanced,
        total: enhanced.map(i => i.price).reduce((x, y) => x + y, 0)
      };
    case REMOVE_ITEM:
      const filtered = state.items.filter(book => book.isbn !== action.payload.isbn);

      return {
        items: filtered,
        total: filtered.map(i => i.price).reduce((x, y) => x + y, 0)
      };
    default:
      return state;
  }
}
