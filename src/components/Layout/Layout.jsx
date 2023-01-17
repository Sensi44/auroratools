import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header';
import { Footer } from '../Footer';
import './layout.scss';

const Layout = () => {
  return (
    <>
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
