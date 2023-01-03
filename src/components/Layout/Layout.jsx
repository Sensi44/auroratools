import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Offline } from 'react-detect-offline';
import { Alert } from 'antd';

import { Test } from '../Test/Test';
import { NumberAndScroll } from '../Test2/Test';
import './Layout.scss';

const Layout = () => {
  return (
    <div className='app'>
      <header>header</header>
      <NumberAndScroll />
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
