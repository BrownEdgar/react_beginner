import { useContext } from 'react';
import { MyContext } from './Context';

function C() {
  const x = useContext(MyContext);
  console.log(x);

  return (
    <div>
      <h2>Component C </h2>
      <button>{x.title}</button>
    </div>
  );
}

export default C;
