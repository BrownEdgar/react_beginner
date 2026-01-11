import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setposts] = useState([])

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setposts(data));
  }

  useEffect(() => {
    console.log("ok");
    fetchData()
  }, [])

  return <div>
    <ol>
      {
        posts.map((post) => <li key={post.id}>
          {post.title}
        </li>)
      }
    </ol>
  </div>;
}

export default App;
