import { useState } from 'react';
import Blogs from './blogs/Blogs';
import Modal from '../Modal/Modal/Modal';

import './App.scss';
import axios from 'axios';
import MainForm from './Form/MainForm';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [blog, setblog] = useState(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (values, options) => {
    if (blog) {
      axios.put(`http://localhost:3000/blogs/${blog.id}`, values)
        .then(res => {
          console.log(res);
          alert('Blog updated successfully!');
          window.location.reload();
        })
        .catch(err => {
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
    }
    axios.post('http://localhost:3000/blogs', newBlog)
      .then(res => {
        console.log(res);

        alert('Blog added successfully!');
        window.location.reload();
      })


    toggleOpen();
    options.resetForm();
  }



  return <div className="App">
    <h1>Our BLOGS</h1>
    <button onClick={toggleOpen}>Add New Blog</button>
    <Modal title="Add New Blog" isOpen={isOpen} setisOpen={setIsOpen}>
      <MainForm handleSubmit={handleSubmit} blog={blog} />
    </Modal>
    <Blogs setblog={setblog} toggleOpen={toggleOpen} />
  </div>;
}

export default App;
