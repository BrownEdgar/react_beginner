import React, { useState } from 'react';
import A from './A';
import { MyContext } from './Context';

// 1. useState 2. useEffect 3. useContext 4. useReducer 5. useRef 6. useMemo 7. useCallback
function App() {
  const [title, settitle] = useState('button 2');

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
