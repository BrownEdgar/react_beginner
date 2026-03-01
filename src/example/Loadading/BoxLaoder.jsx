import ContentLoader from 'react-content-loader';

const BoxLoader = (props) => (
  <ContentLoader
    speed={1}
    width={300}
    height={300}
    viewBox='0 200 200'
    backgroundColor='#d9c9c9'
    foregroundColor='#899089'
    {...props}
  >
    <rect
      x='15'
      y='6'
      rx='3'
      ry='3'
      width='248'
      height='185'
    />
  </ContentLoader>
);

export default BoxLoader;
