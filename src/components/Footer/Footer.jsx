import React from 'react';
import { Link } from 'react-router-dom';

import youtube from '../../assets/img/youtube.png';

import './footer.scss';

function Footer() {
  return (
    <>
      <footer>
        <div className='footer_container'>
          <div>
            <span className='elem1'>© 2023</span>
            <span className='elem2'>Авроратулс.ру</span>
            <span>Все права защищены</span>
          </div>
          <div className='footer__right'>
            <Link to='/contacts' className='footer__link'>
              Контакты
            </Link>
            <a
              target='_blank'
              className='footer__tube'
              rel='noreferrer'
              href='https://www.youtube.com/channel/UCgg6TsLn58vkqQ5CICGJdyg/about'
            >
              <img width='49px' height='37px' src={youtube} alt='youtube' />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
