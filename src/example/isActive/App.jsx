import { useState } from 'react';

function App() {
  const [activeIndex, setActiveIndex] = useState('Home');

  const handleClick = (item) => {
    setActiveIndex(item);
  };

  return (
    <div>
      {['Home', 'About', 'Contact'].map((item) => {
        return (
          <button
            key={item}
            className={activeIndex === item ? 'active' : ''}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default App;
