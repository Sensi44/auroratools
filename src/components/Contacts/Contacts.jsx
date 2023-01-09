import React from 'react';
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

import './contacts.scss';

function Contacts() {
  const defaultState = {
    center: [60.014018, 30.296123],
    zoom: 12,
    controls: [],
  };

  return (
    <>
      <section id='contacts' className='contacts'>
        <div className='container'>
          <div className='location'>
            <YMaps>
              <Map defaultState={defaultState} className='yandex__map'>
                <ZoomControl options={{ float: 'right' }} />
                <Placemark geometry={[60.014018, 30.296123]} />
              </Map>
            </YMaps>
            <div className='location__info'>
              <h3 className='location__title '>Контакты</h3>
              <span className='location__text address'>
                Коломяжский пр., д27, литера А, кабинет 12 Санкт-Петербург
              </span>
              <span className='location__text con_phone'>
                +7 (921) 787-66-60
              </span>
              <span className='location__text con_mail'>
                info@auroratools.ru
              </span>
            </div>
          </div>

          <div className='contacts__info'>
            <h3 className='contacts__title'>Заголовок</h3>
            <p className='location__text'>
              По любым вопросам вы всегда можете обратиться по телефону: +7(921)
              787-66-60 Наши менеджеры быстро и качественно проконсультируют о
              любом металлорежущем инструменте.
            </p>
            <p className='location__text'>
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
