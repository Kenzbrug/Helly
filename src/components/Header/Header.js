import { useState } from 'react';
import './Header.css';
import headerImage from '../../images/header-image.jpg';

import NavBar from '../NavBar/NavBar';

function Header({ location }) {
  const [clickMenu, setClickMenu] = useState(false);
  const [clickDropdownBnt, setClickDropdownBnt] = useState(false);
  function handleClickMenu() {
    console.log('menu');
    setClickMenu(!clickMenu);
    setClickDropdownBnt(false);
  }
  const handleCloseClickMenu = () => {
    // console.log('close-menu');
    setClickMenu(false);
  };
  const hadleToggleDropdownBtn = () => {
    setClickDropdownBnt(!clickDropdownBnt);
    console.log('dropDown');
  };
  return (
    <header className='header'>
      <img className='header__image' src={headerImage} alt='Наша собачка Чивви' />
      <NavBar
        location={location}
        handleClickMenu={handleClickMenu}
        clickMenu={clickMenu}
        handleCloseClickMenu={handleCloseClickMenu}
        hadleToggleDropdownBtn={hadleToggleDropdownBtn}
        clickDropdownBnt={clickDropdownBnt}
      />
    </header>
  );
}

export default Header;
