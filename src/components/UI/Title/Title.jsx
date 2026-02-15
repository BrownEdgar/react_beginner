import './Title.css';

function Title({ title = 'Default title', lesson }) {
  return (
    <div className='title__wrapper'>
      <h1 className='title'>
        {title}
        {lesson && <span>{lesson}</span>}
      </h1>
    </div>
  );
}

export default Title;
