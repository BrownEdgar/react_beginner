import { useContext } from 'react';
import C from './C';
import { MyContext } from './Context';

function B() {
  const x = useContext(MyContext);
  return (
    <div>
      <h2>Component B {x?.a}</h2>
      <C />
    </div>
  );
}

export default B;
