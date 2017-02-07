export function counterReducer(<TEX>\bfseries state = 0, action</TEX>) {
  switch (<TEX>\bfseries action.type</TEX>) {
    case 'INCREMENT_COUNT':
      return state + action.payload;
    default:
      return state;
  }
}
