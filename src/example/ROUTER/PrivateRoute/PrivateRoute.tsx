import { Navigate, Outlet, useLocation } from 'react-router';
import { isAuthenticated } from '../auth/storage';

export default function PrivateRoute() {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
