import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Offline } from 'react-detect-offline';
import { Alert } from 'antd';

import './Layout.scss';

const Layout = () => {
  return (
    <div className='app'>
      <header>header</header>
      <Link to='/test' className='newArticle'>
        to test
      </Link>
      <Link to='/form' className='newArticle'>
        to form
      </Link>
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
