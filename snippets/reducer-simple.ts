export function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + action.payload;
    default:
      return state;
  }
}
