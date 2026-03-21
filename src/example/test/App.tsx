import { useEffect, useReducer, useState } from 'react';
import Child from './Child';
import type { IFirst } from '@types/types';

interface Action { type: 'increment' | 'decrement' }

const reducer = (state: { count: number }, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const o: { count: number } = {
  count: 0
};

function App() {
  const [count, setCount] = useState<number>(0);

  return <div className='App'>
    <ul>
      <li>
        <a href="/">Google</a>
      </li>
      <li>
        <a href="/">Google</a>
      </li>
      <li>
        <a href="/">Google</a>
      </li>
      <li>
        <a href="/">Google</a>
      </li>
    </ul>
  </div>;
}

export default App;
