import React from 'react';
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import { Link } from 'react-router-dom';

import './contacts.scss';
import logo from '../../assets/img/logo.png';

function Contacts() {
  const defaultState = {
    center: [60.014018, 30.296123],
    zoom: 12,
    controls: [],
  };

  return (
    <>
      <section id='contacts' className='contacts'>
        {/* <Link to='/' className='header__logo logo__adaptive'> */}
        {/*   <img src={logo} alt='Logo Auroratools' /> */}
        {/* </Link> */}
        <div className='container'>
          <div className='location'>
            <div className='preload-container'>
              <YMaps>
                <Map defaultState={defaultState} className='yandex__map'>
                  <ZoomControl options={{ float: 'right' }} />
                  <Placemark geometry={[60.014018, 30.296123]} />
                </Map>
              </YMaps>
            </div>
            <div className='location__info'>
              <h3 className='location__title '>Контакты</h3>
              <span className='location__text address'>
                Коломяжский пр., д27, литера А, кабинет 12 Санкт-Петербург
              </span>
              <a href='tel:89217876660' className='location__text con_phone'>
                +7 (921) 787-66-60
              </a>
              <a
                href='mailto:info@auroratools.ru'
                className='location__text con_mail'
              >
                info@auroratools.ru
              </a>
            </div>
          </div>

          <div className='contacts__info'>
            <h3 className='contacts__title'>Заголовок</h3>
            <p className='contacts__text'>
              По любым вопросам вы всегда можете обратиться по телефону: +7(921)
              787-66-60 Наши менеджеры быстро и качественно проконсультируют о
              любом металлорежущем инструменте.
            </p>
            <p className='contacts__text'>
              Также вы можете отправить запрос на почту, все заявки
              обрабатываются в течение 24 часов.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
