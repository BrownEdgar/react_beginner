import { NavLink } from 'react-router';
import './Navbar.css';

export default function Navbar() {
  return (
    <header>
      <nav className='flex'>
        <ul>
          <li>
            <NavLink to='/' >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/about'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li>
            <NavLink to='/register'>Register</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
