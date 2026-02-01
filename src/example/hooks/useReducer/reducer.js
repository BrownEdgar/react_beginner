import { ADD, POP, MULTIPLY, RESET, SORTARRAY } from './actions';

export const initialState = [];

export const initStateFn = () => {
  const randomArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  return randomArr;
}

//action =  { type: "plus"}
function reducer(state, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload.item || 1];
    case POP:
      return state.slice(0, -1);
    case MULTIPLY:
      return state.map(x => x * 2);
    case SORTARRAY:
      return state.toSorted((a, b) => a - b);
    case RESET:
      return initStateFn();
    default:
      return state;
  }
}

export default reducer;
