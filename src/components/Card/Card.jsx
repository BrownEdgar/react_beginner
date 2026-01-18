import './Card.scss';

export default function Card({ children, title, theme = 'light' }) {
  console.log(children);

  return (
    <div className={`Card Card__${theme}`}>
      {title && <h1 className='Card__title'>{title}</h1>}
      {children}
    </div>
  );
}
