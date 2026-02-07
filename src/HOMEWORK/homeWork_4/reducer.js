export const initialState = [154, 42, 1, 87, 695, 36, 2, 10, 39, 9];
function Sort(state) {
  const sorted = state
    .toSorted((a, b) => a - b)
    .slice(0, -3);
  return sorted;


}
function MinNumber(state) {
  const min = Math.min(...state);
  return state.filter((item) => item !== min);
}

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload || 3];
    case 'sort':
      return Sort(state);
    case 'min':
      return MinNumber(state);
    case "square":
      return state.map(item => Math.pow(item, 2))
    default:
      return state;
  }
}

export default reducer