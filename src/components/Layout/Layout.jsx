import React from 'react';
import { Outlet } from 'react-router-dom';
import { Offline } from 'react-detect-offline';
import { Alert } from 'antd';

import { Header } from '../Header';
import { Footer } from '../Footer';
import './layout.scss';

const Layout = () => {
  return (
    <>
      <Offline>
        <div className='network-e'>
          <Alert
            message='Internet connection problem, please check your network connection'
            type='error'
          />
        </div>
      </Offline>
      <div id='top' />
      <Header />
      <main id='main'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
