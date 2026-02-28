import axios from 'axios';
import { useEffect, useState } from "react";
import Blog from '../Blog/Blog';

import './Blogs.scss';

function Blogs({ setblog, toggleOpen }) {
  const [blogs, setBlogs] = useState([]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/blogs/${id}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios.get('http://localhost:3000/blogs')
      .then(res => {
        setBlogs(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  const handleEdit = (blog) => {
    setblog(blog);
    toggleOpen();
  }


  return <div className="blogs">
    {blogs.map(blog => (
      <Blog key={blog.id} blog={blog} handleDelete={handleDelete} handleEdit={handleEdit} />
    ))}
  </div>;
}

export default Blogs;
