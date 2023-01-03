import React from 'react';
import { Link } from 'react-router-dom';

import './testmenu.scss';

function TestMenu() {
  return (
    <nav className='testmenu'>
      <Link to='/contacts' className='newArticle'>
        Contacts
      </Link>
      <br />
      <Link to='/about-us' className='newArticle'>
        AboutUs
      </Link>
      <br />
      <Link to='/partners' className='newArticle'>
        Partners
      </Link>
      <br />
      <Link to='/test123' className='newArticle'>
        to test123
      </Link>
      <br />
      <Link to='/form' className='newArticle'>
        to form
      </Link>
      <br />
      <Link to='/products' className='newArticle'>
        products
      </Link>
      <br />
    </nav>
  );
}

export default TestMenu;
