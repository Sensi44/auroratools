import React, { useEffect, useLayoutEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Offline } from 'react-detect-offline';
import { Alert } from 'antd';

import { TestFonts } from '../TestFonts/TestFonts';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { TestMenu } from '../TestMenu';
import './Layout.scss';

const Layout = () => {
  useEffect(() => {
    console.log('Родительский useEffect');
  }, []);

  useLayoutEffect(() => {
    console.log('Родительский useLayoutEffect');
  }, []);

  console.log('Родительский рендер');
  return (
    <div className='app'>
      <Header />
      <TestMenu />
      <TestFonts className='aaa' />

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
      <Footer />
    </div>
  );
};

export default Layout;
