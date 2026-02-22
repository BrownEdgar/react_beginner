import './Post.css';

// props = { }
function Post({ hidden, variant = 'dark', title, desc, active, handleActive }) {
  if (hidden) {
    return null;
  }

  return (
    <div
      className='post'
      onClick={handleActive}
    >
      <h2 className={active ? 'active' : ''}>{title}</h2>
      <p className={variant}>{desc}</p>
    </div>
  );
}

export default Post;
