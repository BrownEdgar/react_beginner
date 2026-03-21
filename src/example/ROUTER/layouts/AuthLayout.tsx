import { Outlet } from 'react-router';
import './AuthLayout.css';

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-layout__bg" />
      <div className="auth-layout__card">
        <Outlet />
      </div>
    </div>
  );
}
