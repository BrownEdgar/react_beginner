import React, { useReducer } from 'react';
import reducer, { initialState } from './reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: 'Add' })}> +</button>
    </div>
  );
}

export default App;
