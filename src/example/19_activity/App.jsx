import { Activity, useState } from 'react';

function Child() {
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Activity mode={isOpen ? 'visible' : 'hidden'}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dolor, fugit minus modi ab
          iusto adipisci corporis omnis accusamus distinctio sint, possimus autem dolorum nam. Saepe
          error minus id labore!
        </p>
      </Activity>

      <button onClick={() => setIsOpen(!isOpen)}>Open Activity</button>
    </div>
  );
}

export default App;
