import React from 'react';
import { Link } from 'react-router-dom';

import { CustomLink } from '../CustomLink';

import './header.scss';

function Header() {
  return (
    <>
      <header>Header</header>
      <nav className='testmenu'>
        <CustomLink to='/'>Home</CustomLink>
        <br />
        <CustomLink to='/contacts'>Contacts</CustomLink>
        <br />
        <CustomLink to='/about-us'>AboutUs</CustomLink>
        <br />
        <CustomLink to='/partners'>Partners</CustomLink>
        <br />
        <CustomLink to='/test123'>to test123</CustomLink>
        <br />
        <CustomLink to='/form'>to form</CustomLink>
        <br />
        <CustomLink to='/products'>products</CustomLink>
        <br />
        <CustomLink to='/badUrl'>BadUrl</CustomLink>
        <br />
      </nav>
    </>
  );
}

export default Header;
