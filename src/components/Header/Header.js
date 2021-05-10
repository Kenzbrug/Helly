import './Header.css';
import headerImage from '../../images/header-image.jpg';

import NavBar from '../NavBar/NavBar';

function Header({ location }) {
  return (
    <header className='header'>
      <img
        className='header__image'
        src={headerImage}
        alt='Наша собачка Чивви'
      />
      <NavBar location={location} />
    </header>
  );
}

export default Header;
