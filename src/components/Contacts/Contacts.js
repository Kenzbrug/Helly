import './Contacts.css';

import Instagram from '../../images/contacts-instagram_icon.png'
import VkIcon from '../../images/contacts-vkontakte_icon.svg'

function Contacts() {
  return (
    <section className='contacts'>
      <div className='contacts__container-title'>
        <div className='contacts__line'></div>
        <h1 className='contacts__title'>
          КОНТАКТЫ
        </h1>
        <div className='contacts__line'></div>
      </div>
      <div className='contacts__container-main'>
        <div className='contacts__contacts'>
          <p className='contacts__subtitle'>
            адрес
          </p>
          <h3 className='contacts__addres'>
            г.Санкт-Петербург, Стрельнинское шоссе, д.Ропша
          </h3>
          <p className='contacts__subtitle'>
            телефон
          </p>
          <h3 className='contacts__addres'>
            8904-555-333-0
          </h3>
          <p className='contacts__subtitle'>
            режим работы
          </p>
          <h3 className='contacts__addres'>
            Ежедневно 10:00-20:00
          </h3>
          <p className='contacts__subtitle'>
            мы в социальных сетях
          </p>
          <nav className='contacts__links'>
            <ul className='contacts__lists'>
              <li className='contacts__list'>
                <a
                  href='https://vk.com/globalelitedogs'
                  target='blank'
                  className='contacts__link'
                >
                  <img
                    src={VkIcon}
                    alt='ВКонтакте'
                    className='contacts__social-icon'
                  />
                </a>
              </li>
              <li className='contacts__list'>
                <a
                  href='https://www.instagram.com/globalelitedogs/'
                  target='blank'
                  className='contacts__link'
                >
                  <img
                    src={Instagram}
                    alt='Инстаграм'
                    className='contacts__social-icon'
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='contacts__map'>
          <iframe title="Карта до Ропши" src="https://yandex.ru/map-widget/v1/?um=constructor%3A5f85ff97c8adb72b94c2a46adb1c8382b7e52e8a8f7d6c4af917b41c277616d3&amp;source=constructor" width="529" height="437" frameborder="0"></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
