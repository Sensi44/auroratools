import React from 'react';
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

import './contacts.scss';

function Contacts() {
  const defaultState = {
    center: [25.259977, 55.370374],
    // center: [60.014018, 30.296123],
    zoom: 12,
    controls: [],
  };

  return (
    <>
      <section id='contacts' className='contacts'>
        <div className='container'>
          <div className='location'>
            <div className='preload-container'>
              <YMaps>
                <Map defaultState={defaultState} className='yandex__map'>
                  <ZoomControl options={{ float: 'right' }} />
                  <Placemark geometry={[25.259977, 55.370374]} />
                </Map>
              </YMaps>
            </div>
            <div className='location__info'>
              <h3 className='location__title '>Contacts</h3>
              <span className='location__text address'>
                6WA 509, Building 6WA,
                <br />
                Dubai Airport Freezone
                <br />
                P.O. Box: 54559, UAE
                <br />
              </span>
              <a href='tel:971507559305' className='location__text con_phone'>
                +971507559305
              </a>
              <a
                href='mailto:info@creativetools.ae'
                className='location__text con_mail'
              >
                info@creativetools.ae
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
