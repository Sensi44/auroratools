import React from 'react';
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

import contacts1 from '../../assets/img/contacts-1.jpg';
import contacts2 from '../../assets/img/contacts-2.jpg';

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
              <YMaps query={{ lang: 'en_RU' }}>
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

          <div className='contacts__imgs'>
            <img
              className='contacts__img_photo'
              src={contacts1}
              alt='airport'
            />
            <img className='contacts__img_photo' src={contacts2} alt='office' />
          </div>

          <div className='contacts__info'>
            <h3 className='contacts__title'>Заголовок</h3>
            <p className='contacts__text'>
              Creative Tools FZCO located at DAFZ (Dubai Airport Free Zone) UAE.
            </p>
            <p className='contacts__text'>
              We are happy to receive your requirements via e-mail, or by phone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
