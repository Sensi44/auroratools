import React from 'react';
import { Link } from 'react-router-dom';

import youtube from '../../assets/img/youtube.png';

import './footer.scss';

function Footer() {
  return (
    <>
      <footer>
        <div className='footer_container'>
          <div className='footer__left'>
            <span className='elem1'>© 2023</span>
            <span className='elem2'>Creative Tools FZCO</span>
            <span>All rights reserved</span>
          </div>
          <div className='footer__right'>
            <Link to='/contacts' className='footer__link'>
              Contacts
            </Link>
            {/* <a */}
            {/*   target='_blank' */}
            {/*   className='footer__tube' */}
            {/*   rel='noreferrer' */}
            {/*   href='https://www.youtube.com/channel/UCgg6TsLn58vkqQ5CICGJdyg/about' */}
            {/* > */}
            {/*   <img width='49px' height='37px' src={youtube} alt='youtube' /> */}
            {/* </a> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
