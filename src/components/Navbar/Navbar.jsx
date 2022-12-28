import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const NavLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'none' : 'underline',
  };
};

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.links}>
        <li className={styles.link}>
          <NavLink style={NavLinkStyles} to='/'>
            Home
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink style={NavLinkStyles} to='/super-heroes'>
            Super Heroes
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink style={NavLinkStyles} to='/rq-super-heroes'>
            RQSUper Heroes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
