import React from 'react';
import { Outlet } from 'react-router-dom';
import { Offline } from 'react-detect-offline';
import { Alert } from 'antd';

import './Layout.scss';

const Layout = () => {
  return (
    <div className='app'>
      <header>header</header>
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
