import { Outlet, NavLink, useNavigate } from 'react-router';
import { clearAuth } from '../auth/storage';
import './PrivateLayout.css';

export default function PrivateLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuth();
    navigate('/login', { replace: true });
  };

  return (
    <div className="private-layout">
      <aside className="private-sidebar">
        <h2 className="private-sidebar__title">Личный кабинет</h2>
        <nav className="private-sidebar__nav">
          <NavLink to="/dashboard">Дашборд</NavLink>
          <NavLink to="/loader-example">Пример Loader</NavLink>
        </nav>
        <button type="button" className="private-sidebar__logout" onClick={handleLogout}>
          Выйти
        </button>
      </aside>
      <main className="private-main">
        <Outlet />
      </main>
    </div>
  );
}
