import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
      <nav className='navbar__container'>
        <div className='navbar_dark'></div>
        <NavLink activeClassName='navbar__link_active' className='navbar__link' exact to='/'>
          Главная
            </NavLink>
        <NavLink
          activeClassName='navbar__link_active'
          className='navbar__link'
          exact
          to='/our-pats'
        >
          Наши питомцы
            </NavLink>
        <NavLink
          activeClassName='navbar__link_active'
          className='navbar__link'
          exact
          to='/dog-training'
        >
          Дрессировка собак
            </NavLink>

        <NavLink
          activeClassName='navbar__link_active'
          className='navbar__link'
          exact
          to='/our-puppies'
        >
          Наши щенки
            </NavLink>

        <NavLink
          activeClassName='navbar__link_active'
          className='navbar__link'
          exact
          to='/сontacts'
        >
          Контакты
            </NavLink>

      </nav>
    </div>
  );
}

export default NavBar;
