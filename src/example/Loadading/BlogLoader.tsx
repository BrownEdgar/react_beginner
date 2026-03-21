import ContentLoader from 'react-content-loader';

interface BlogLoaderProps {
  backgroundColor?: string;
  foregroundColor?: string;
  [key: string]: unknown;
}

const BlogLoader = (props: BlogLoaderProps) => (
  <ContentLoader
    viewBox='0 0 1260 400'
    height={900}
    width={1360}
    {...props}
  >
    <rect
      x='0'
      y='0'
      rx='8'
      ry='8'
      width='200'
      height='200'
    />
    <rect
      x='30'
      y='250'
      rx='0'
      ry='0'
      width='200'
      height='18'
    />
    <rect
      x='30'
      y='275'
      rx='0'
      ry='0'
      width='120'
      height='20'
    />
    <rect
      x='250'
      y='20'
      rx='8'
      ry='8'
      width='200'
      height='200'
    />
    <rect
      x='250'
      y='250'
      rx='0'
      ry='0'
      width='200'
      height='18'
    />
    <rect
      x='250'
      y='275'
      rx='0'
      ry='0'
      width='120'
      height='20'
    />
    <rect
      x='470'
      y='20'
      rx='8'
      ry='8'
      width='200'
      height='200'
    />
  </ContentLoader>
);

export default BlogLoader;
