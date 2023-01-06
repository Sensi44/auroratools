import React from 'react';

import { CustomLink } from '../CustomLink';

import './header.scss';

function Header() {
  return (
    <header>
      <div className='container'>
        <nav className='t'>
          <CustomLink classNames='topMenu-link' to='/'>
            Home
          </CustomLink>
          <CustomLink classNames='topMenu-link' to='/contacts'>
            Contacts
          </CustomLink>
          <CustomLink classNames='topMenu-link' to='/about-us'>
            AboutUs
          </CustomLink>
          <CustomLink classNames='topMenu-link' to='/partners'>
            Partners
          </CustomLink>
          <CustomLink classNames='topMenu-link' to='/test123'>
            to test123
          </CustomLink>
          <CustomLink classNames='topMenu-link' to='/form'>
            to form
          </CustomLink>
          <CustomLink classNames='topMenu-link' to='/products/frez'>
            products
          </CustomLink>
          <CustomLink classNames='topMenu-link' to='/badUrl'>
            BadUrl
          </CustomLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
