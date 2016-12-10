export const INCREMENT = 'INCREMENT_COUNT';

export function booksReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    default:
      return state;
  }
}
