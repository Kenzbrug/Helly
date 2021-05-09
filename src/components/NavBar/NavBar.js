import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
      <nav className='navbar__container'>
        <div className='navbar__dark'></div>
        <NavLink activeClassName='navbar__link_active' className='navbar__link' exact to='/'>
          Главная
        </NavLink>

        <div className='navbar__link navbar__link_else navbar__dropdown '>
          <button className='navbar__dropbtn'>DropBTN
            <i className='fa fa-caret-down'></i>
          </button>
          <div className="navbar__dropdown-content">
            <NavLink href='123' className='navbar__link navbar__link_dropdown-content' exact to='/'>Наша Чивви</NavLink>
            <NavLink href='123' className='navbar__link navbar__link_dropdown-content' exact to='/'>Кони</NavLink>
            <NavLink href='123' className='navbar__link navbar__link_dropdown-content' exact to='/'>Кролики</NavLink>
          </div>
        </div>


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
