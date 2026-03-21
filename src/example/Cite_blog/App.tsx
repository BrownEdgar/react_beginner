import { useState } from 'react';
import Blogs from './blogs/Blogs';
import Modal from '../Modal/Modal/Modal';

import './App.scss';
import axios from 'axios';
import MainForm from './Form/MainForm';
import BlogHeader from './BlogHeader/BlogHeader';
import { ToastContainer, toast } from 'react-toastify';
import type { IBlog } from '@/types/types';
import type { FormikHelpers } from 'formik';
import type { BlogFormValues } from './Form/MainForm';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [blog, setblog] = useState<IBlog | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [timer, setTimer] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  const notify = (message: string) =>
    toast(message, { type: 'success', autoClose: 2000, position: 'top-right' });

  const fetchData = () => {
    axios
      .get('http://localhost:3000/blogs')
      .then((res) => {
        setLoading(false);
        setBlogs(res.data as IBlog[]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const myFunction = (e: React.MouseEvent) => {
    e.preventDefault();
  }


  const handleSubmit = (values: BlogFormValues, options: FormikHelpers<BlogFormValues>) => {
    if (blog) {
      axios
        .put(`http://localhost:3000/blogs/${blog.id}`, { ...values, id: blog.id })
        .then(() => {
          fetchData();
          notify('Blog updated successfully!');
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setblog(null);
        });
      toggleOpen();
      options.resetForm;
      return;
    }

    const newBlog: IBlog = {
      ...values,
      id: Date.now(),
    };
    axios.post('http://localhost:3000/blogs', newBlog).then(() => {
      fetchData();
      notify('Blog added successfully!');
    });

    toggleOpen();
    options.resetForm();
  };

  return (
    <div className='App' onClick={myFunction}>
      <BlogHeader
        toggleOpen={toggleOpen}
        setSearchTerm={setSearchTerm}
        setTimer={setTimer}
        timer={timer}
      />
      <Modal
        title='Add New Blog'
        isOpen={isOpen}
        setisOpen={setIsOpen}
      >
        <MainForm
          handleSubmit={handleSubmit}
          blog={blog}
        />
      </Modal>
      <Blogs
        setblog={setblog}
        toggleOpen={toggleOpen}
        searchTerm={searchTerm}
        blogs={blogs}
        loading={loading}
        setLoading={setLoading}
        fetchData={fetchData}
        setBlogs={setBlogs}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
