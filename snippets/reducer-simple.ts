export function counterReducer(/*TEX:\bfs*/state = 0, action/*TEX:\bfe*/) {
  switch (/*TEX:\bfs*/action.type/*TEX:\bfe*/) {
    case 'INCREMENT_COUNT':
      return state + action.payload;
    default:
      return state;
  }
}
