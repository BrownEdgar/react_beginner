
import { Link } from 'react-router';

function ErrorPage() {
  return <div>
    <h1>Page not found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to="/">Go to home page</Link>
    <img src="https://picsum.photos/200/300" alt="error" />
  </div>;
}

export default ErrorPage;
