import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Offline } from 'react-detect-offline';
import { Alert } from 'antd';

import './Layout.scss';

const Layout = () => {
  return (
    <div className='app'>
      <header>header</header>
      <nav>
        <Link to='/test' className='newArticle'>
          to test
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
        <Link to='/products/tokar' className='newArticle'>
          tokar
        </Link>
        <br />
        <Link to='/products/frez' className='newArticle'>
          frez
        </Link>
      </nav>
      <Offline>
        <div className='network-e'>
          <Alert
            message='Internet connection problem, please check your network connection'
            type='error'
          />
        </div>
      </Offline>
      <main className='container'>
        main container
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
