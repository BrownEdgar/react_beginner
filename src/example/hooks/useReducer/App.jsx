import { useReducer } from "react";
import reducer, { initialState, initStateFn } from './reducer';
import { ADD, MULTIPLY, POP, RESET, SORTARRAY } from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState, initStateFn);

  const handleClick = () => dispatch({ type: ADD, payload: { item: 3 } })

  return <div>
    <h1>count: {state.join(", ")}</h1>
    <button onClick={handleClick}>Add</button>
    <button onClick={() => dispatch({ type: POP })}>POP</button>
    <button onClick={() => dispatch({ type: MULTIPLY })}>*</button>
    <button onClick={() => dispatch({ type: SORTARRAY })}>Sort</button>
    <button onClick={() => dispatch({ type: RESET })}>reset</button>
  </div>;
}

export default App;
