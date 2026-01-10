
import { useState } from 'react';
import Post from '../Post/Post';
import { generateId } from '../utils/genereate-id';

function Posts() {
  const [posts, setposts] = useState([
    {
      id: generateId(),
      title: "Zangezur Past N 1",
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia molestias ipsam placeat.'
    },
    {
      id: generateId(),
      title: "Ararat Post N 2",
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia molestias ipsam placeat.'
    },
    {
      id: generateId(),
      title: "Yrevan post",
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia molestias ipsam placeat.'
    },
    {
      id: generateId(),
      title: "Vanadzot post N 4",
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia molestias ipsam placeat.'
    },
  ]);

  const handleSort = () => {
    const newArray = posts.toSorted((a, b) => a.title.localeCompare(b.title))
    setposts(newArray)
  }

  return <div>
    <button onClick={handleSort} >sort</button>
    {
      posts.map(elem => {
        return <Post key={elem.id} title={elem.title} desc={elem.desc} variant='dark' />
      })
    }
  </div>;
}

export default Posts;
