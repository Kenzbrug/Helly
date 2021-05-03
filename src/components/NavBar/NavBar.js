import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div className='navbar_dark'></div>
        <ul className='navbar__lists'>
          <li className='navbar__list'>
            <NavLink activeClassName='' className='navbar__link' exact to='/'>
              Главная
            </NavLink>
          </li>
          <li className='navbar__list'>
            <NavLink
              activeClassName='navbar__link_active'
              className='navbar__link'
              exact
              to='/our-pats'
            >
              Наши питомцы
            </NavLink>
          </li>
          <li className='navbar__list'>
            <NavLink
              activeClassName='navbar__link_active'
              className='navbar__link'
              exact
              to='/dog-training'
            >
              Дрессировка собак
            </NavLink>
          </li>
          <li className='navbar__list'>
            <NavLink
              activeClassName='navbar__link_active'
              className='navbar__link'
              exact
              to='/our-puppies'
            >
              Наши щенки
            </NavLink>
          </li>
          <li className='navbar__list'>
            <NavLink
              activeClassName='navbar__link_active'
              className='navbar__link'
              exact
              to='/сontacts'
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
