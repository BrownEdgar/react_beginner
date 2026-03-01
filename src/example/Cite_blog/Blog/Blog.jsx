import { X, Pencil } from 'lucide-react';
import './Blog.scss';

function Blog({ blog, handleDelete, handleEdit }) {
  return (
    <div className='blog'>
      <img
        src={blog.image}
        alt={blog.title}
      />
      <div className='blog__content'>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <ul className='blog__info'>
          <li>
            <strong>Author: {blog.author}</strong>
          </li>
          <li>
            <strong>Date: {blog.date}</strong>
          </li>
        </ul>
        <div className='blog__edit'>
          <button onClick={() => handleEdit(blog)}>
            Edit
            <Pencil
              size={16}
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
      <X
        className='close'
        onClick={() => handleDelete(blog.id)}
      />
    </div>
  );
}

export default Blog;
