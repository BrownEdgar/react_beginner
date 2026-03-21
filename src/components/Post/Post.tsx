import './Post.css';

export interface PostProps {
  hidden?: boolean;
  variant?: 'dark' | 'light';
  title: string;
  desc: string;
  active?: boolean;
  handleActive?: () => void;
}

function Post({ hidden, variant = 'dark', title, desc, active, handleActive }: PostProps) {
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
