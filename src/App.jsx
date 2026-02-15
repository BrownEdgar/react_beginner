import { useState } from 'react';
import './App.css';
import Posts from './components/Posts/Posts';

function App() {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className='App'>
      <button onClick={handleClick}>{isHidden ? 'show' : 'hide'}</button>
      <Posts />
    </div>
  );
}

export default App;
