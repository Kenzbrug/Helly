import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar({ location, handleClickMenu, handleCloseClickMenu, hadleToggleDropdownBtn, clickMenu /*clickDropdownBnt*/ }) {
  // const style = {
  //   displayNone: {
  //     display: 'none',
  //   },
  //   displayBlock: {
  //     display: 'block',
  //   },
  // };
  return (
    <div className='navbar'>
      <div className={`navbar__dark ${clickMenu ? 'navbar__dark_active' : ''}`}></div>
      <div className={`navbar__menu ${clickMenu ? 'navbar__menu_active' : ''}`} onClick={handleClickMenu}></div>
      <nav className={`navbar__container ${clickMenu ? 'navbar__container_active' : ''}`}>
        <NavLink activeClassName='navbar__link_active' onClick={handleCloseClickMenu} className='navbar__link' exact to='/'>
          Главная
        </NavLink>
        <div
          className={`navbar__dropdown ${
            location === '/dogs'
              ? 'navbar__link_active'
              : location === '/horses'
              ? 'navbar__link_active'
              : location === '/rabbits'
              ? 'navbar__link_active'
              : ''
          }`}
        >
          <button className='navbar__dropbtn' onClick={hadleToggleDropdownBtn}>
            Наши питомцы
            <i className='navbar__arrow-down'></i>
          </button>
          <div className='navbar__dropdown-content' /*{style={clickDropdownBnt ? style.displayBlock : style.displayNone}*/>
            <NavLink activeClassName='navbar__link_active' onClick={handleCloseClickMenu} className='navbar__link_dropdown-content' exact to='/dogs'>
              Собаки
            </NavLink>
            <NavLink
              activeClassName='navbar__link_active'
              onClick={handleCloseClickMenu}
              className='navbar__link_dropdown-content'
              exact
              to='/horses'
            >
              Кони
            </NavLink>
            <NavLink
              activeClassName='navbar__link_active'
              onClick={handleCloseClickMenu}
              className='navbar__link_dropdown-content'
              exact
              to='/rabbits'
            >
              Кролики
            </NavLink>
          </div>
        </div>
        <NavLink activeClassName='navbar__link_active' onClick={handleCloseClickMenu} className='navbar__link' exact to='/dog-training'>
          Дрессировка собак
        </NavLink>

        <NavLink activeClassName='navbar__link_active' onClick={handleCloseClickMenu} className='navbar__link' exact to='/our-puppies'>
          Наши щенки
        </NavLink>

        <NavLink activeClassName='navbar__link_active' onClick={handleCloseClickMenu} className='navbar__link' exact to='/сontacts'>
          Контакты
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
