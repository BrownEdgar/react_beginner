import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [x, setX] = useState(10);
  const [posts, setposts] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const fetchData = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${x}`)
        .then((response) => response.json())
        .then((data) => setposts(data))
        .finally(() => setLoading(false))
    }

    fetchData()
  }, [x])

  const handleDelete = (id) => {
    const newArr = posts.filter((post) => post.id !== id)
    setposts(newArr)
  }

  return <div>
    <button onClick={() => setX(x + 1)} disabled={loading}>change x {x}</button>
    {
      loading
        ? <h1>Loaging...</h1>
        : (
          <ol>
            {
              posts.map((post) => <li key={post.id}>
                {post.title}
                <button onClick={() => handleDelete(post.id)} className='delete'>delete</button>
              </li>)
            }
          </ol>
        )
    }


  </div>;
}

export default App;
