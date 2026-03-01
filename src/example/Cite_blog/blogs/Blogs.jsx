import axios from 'axios';
import { useEffect } from 'react';
import Blog from '../Blog/Blog';
import BlogLoader from '../../Loadading/BlogLoader';
import './Blogs.scss';

function Blogs({ setblog, toggleOpen, searchTerm, blogs, loading, setLoading, fetchData, setBlogs }) {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/blogs/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/blogs?title:contains=${searchTerm}`)
      .then((res) => {
        setLoading(false);
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);

  const handleEdit = (blog) => {
    setblog(blog);
    toggleOpen();
  };

  return (
    <div className='blogs'>
      {loading ? (
        <BlogLoader
          backgroundColor='#f3f3f3'
          foregroundColor='#776b6b'
        />
      ) : (
        blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))
      )}
    </div>
  );
}

export default Blogs;
