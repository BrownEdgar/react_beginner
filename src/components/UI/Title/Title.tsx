import './Title.css';

export interface TitleProps {
  title?: string;
  lesson?: string | number;
}

function Title({ title = 'Default title', lesson }: TitleProps) {
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
