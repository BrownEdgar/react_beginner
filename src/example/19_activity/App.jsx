import { Activity, useState } from 'react';


function Child() {

  return <div>
    <h1>Child Component</h1>
  </div>;
}


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return <div>
    <Activity mode={isOpen ? "visible" : "hidden"}>
      <Child />
    </Activity>
    <button onClick={() => setIsOpen(!isOpen)}>Open Activity</button>
  </div >;
}

export default App;
