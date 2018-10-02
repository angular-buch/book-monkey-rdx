export function counterReducer(<TEX>\bfs</TEX>state = 0, action<TEX>\bfe</TEX>) {
  switch (<TEX>\bfs</TEX>action.type<TEX>\bfe</TEX>) {
    case 'INCREMENT_COUNT':
      return state + action.payload;
    default:
      return state;
  }
}
