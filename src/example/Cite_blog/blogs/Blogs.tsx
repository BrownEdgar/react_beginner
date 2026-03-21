import axios from 'axios';
import { useEffect } from 'react';
import Blog from '../Blog/Blog';
import type { IBlog } from '@/types/types';
import BlogLoader from '../../Loadading/BlogLoader';
import './Blogs.scss';


interface IBlogsProps {
  setblog: (blog: IBlog) => void,
  toggleOpen: () => void,
  searchTerm: string,
  blogs: IBlog[],
  loading: boolean,
  setLoading: (loading: boolean) => void,
  fetchData: () => void,
  setBlogs: (blogs: IBlog[]) => void,
}


function Blogs({
  setblog,
  toggleOpen,
  searchTerm,
  blogs,
  loading,
  setLoading,
  fetchData,
  setBlogs
}: IBlogsProps) {
  const handleDelete = (id: number) => {
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

  const handleEdit = (blog: IBlog) => {
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
