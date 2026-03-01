import { useState } from 'react';
import Blogs from './blogs/Blogs';
import Modal from '../Modal/Modal/Modal';

import './App.scss';
import axios from 'axios';
import MainForm from './Form/MainForm';
import BlogHeader from './BlogHeader/BlogHeader';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [blog, setblog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [timer, setTimer] = useState(null);
  const notify = (message) =>
    toast(message, { type: 'success', autoClose: 2000, position: 'top-right' });

  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const fetchData = () => {
    axios
      .get('http://localhost:3000/blogs')
      .then((res) => {
        setLoading(false);
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (values, options) => {
    if (blog) {
      axios
        .put(`http://localhost:3000/blogs/${blog.id}`, values)
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
      options.resetForm();
      return;
    }

    const newBlog = {
      ...values,
      id: String(Date.now()),
    };
    axios.post('http://localhost:3000/blogs', newBlog).then(() => {
      fetchData();
      notify('Blog added successfully!');
    });

    toggleOpen();
    options.resetForm();
  };

  return (
    <div className='App'>
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
