import { ADD, POP, MULTIPLY, RESET, SORTARRAY } from './actions';

export const initialState: number[] = [];

export const initStateFn = (): number[] => {
  return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
};

type AddAction = { type: typeof ADD; payload: { item?: number } };
type PopAction = { type: typeof POP };
type MultiplyAction = { type: typeof MULTIPLY };
type ResetAction = { type: typeof RESET };
type SortArrayAction = { type: typeof SORTARRAY };

type ReducerAction = AddAction | PopAction | MultiplyAction | ResetAction | SortArrayAction;

function reducer(state: number[], action: ReducerAction): number[] {
  switch (action.type) {
    case ADD:
      return [...state, action.payload?.item ?? 1];
    case POP:
      return state.slice(0, -1);
    case MULTIPLY:
      return state.map((x) => x * 2);
    case SORTARRAY:
      return state.toSorted((a, b) => a - b);
    case RESET:
      return initStateFn();
    default:
      return state;
  }
}

export default reducer;
