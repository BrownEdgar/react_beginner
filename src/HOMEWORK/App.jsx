import { useEffect, useState } from 'react';

function App() {
  const [post, setPost] = useState([]);
  const fetchData = async () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
        console.log(json);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {post.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
