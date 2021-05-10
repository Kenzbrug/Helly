import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar({ location }) {
  return (
    <div className='navbar'>
      <nav className='navbar__container'>
        <div className='navbar__dark'></div>
        <NavLink
          activeClassName='navbar__link_active'
          className='navbar__link'
          exact
          to='/'
        >
          Главная
        </NavLink>

        <div
          className={`navbar__dropdown navbar__link navbar__link_dropdown-block ${
            location === '/dogs'
              ? 'navbar__link_active'
              : location === '/horses'
              ? 'navbar__link_active'
              : location === '/rabbits'
              ? 'navbar__link_active'
              : ''
          }`}
        >
          <div className='navbar__dropbtn'>
            Наши питомцы
            <i className='navbar__arrow-down'></i>
          </div>
          <div className='navbar__dropdown-content'>
            <NavLink
              activeClassName='navbar__link_active'
              className='navbar__link_dropdown-content'
              exact
              to='/dogs'
            >
              Собаки
            </NavLink>
            <NavLink
              activeClassName='navbar__link_active'
              className='navbar__link_dropdown-content'
              exact
              to='/horses'
            >
              Кони
            </NavLink>
            <NavLink
              activeClassName='navbar__link_active'
              className='navbar__link_dropdown-content'
              exact
              to='/rabbits'
            >
              Кролики
            </NavLink>
          </div>
        </div>

        {/* <NavLink
          activeClassName='navbar__link_active'
          className='navbar__link'
          exact
          to='/our-pats'
        >
          Наши питомцы
        </NavLink> */}

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
