import './Post.css'


// props = { }
function Post({ hidden, variant = 'dark', title, desc }) {
  if (hidden) {
    return null;
  }

  return (
    <div className="post">
      <h2>{title}</h2>
      <p className={variant}>{desc}</p>
    </div>
  )
}

export default Post