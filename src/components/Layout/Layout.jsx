import React, { useEffect, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Offline } from 'react-detect-offline';
import { Alert } from 'antd';

import { Header } from '../Header';
import { Footer } from '../Footer';
import './layout.scss';

const Layout = () => {
  useEffect(() => {
    console.log('Родительский useEffect');
  }, []);

  useLayoutEffect(() => {
    console.log('Родительский useLayoutEffect');
  }, []);

  console.log('Родительский рендер');
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
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
