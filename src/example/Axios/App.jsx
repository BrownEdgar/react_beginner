import axios from 'axios';
import { useEffect, useState } from 'react';
import Title from '../../components/UI/Title/Title';

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10&_start=34')
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = () => {
    axios
      .delete('https://jsonplaceholder.typicode.com/posts/1900')
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Title title='axios' />
      <button onClick={handleDelete}>Delete</button>
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
