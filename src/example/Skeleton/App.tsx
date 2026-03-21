import { useState, useEffect } from 'react';
import './App.scss';
import BoxLoader from '../Loadading/BoxLaoder';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className='App'>
      <h1>Skeleton Example</h1>
      {loading ? (
        <BoxLoader />
      ) : (
        <div className='box'>
          <h2>data</h2>
        </div>
      )}
    </div>
  );
}

export default App;
