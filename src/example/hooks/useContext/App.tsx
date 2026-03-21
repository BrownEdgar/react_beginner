import { useState } from 'react';
import A from './A';
import { MyContext } from './Context';

function App() {
  const [title, settitle] = useState<string>('button 2');

  return (
    <div>
      <h1>App Component</h1>
      <MyContext.Provider value={{ title, settitle, a: 1, b: [] }}>
        <A />
      </MyContext.Provider>
    </div>
  );
}

export default App;
