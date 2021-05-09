import './Footer.css';
import VkIcon from '../../images/footer-vk_icon.svg';
import InstagramIcon from '../../images/footer-instagram_icon.svg';
function Footer() {
  return (
    <footer className='footer'>
      <nav className='footer__links'>
        <ul className='footer__lists'>
          <li className='footer__list'>
            <a
              href='https://vk.com/globalelitedogs'
              target='blank'
              className='footer__link'
            >
              <img
                src={VkIcon}
                alt='ВКонтакте'
                className='footer__social-icon'
              />
            </a>
          </li>
          <li className='footer__list'>
            <a
              href='https://www.instagram.com/globalelitedogs/'
              target='blank'
              className='footer__link'
            >
              <img
                src={InstagramIcon}
                alt='Инстаграм'
                className='footer__social-icon'
              />
            </a>
          </li>
        </ul>
      </nav>
      <h4 className='footer__author'>&copy;2021 Helly</h4>
    </footer>
  );
}

export default Footer;
