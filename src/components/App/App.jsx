import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout';

import { HomePage } from '../HomePage';
import { Products } from '../Products';
import { AboutUs } from '../AboutUs';
import { Contacts } from '../Contacts';
import { Partners } from '../Partners';
import { Page1 } from '../pages/Page1';
import { Page2 } from '../pages/Page2';
import { Page3 } from '../pages/Page3';
import { Page4 } from '../pages/Page4';

import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/products' element={<Products />}>
            <Route path='turning' element={<Page1 />} />
            <Route path='cutters' element={<Page2 />} />
            <Route path='drill' element={<Page3 />} />
            <Route path='axial' element={<Page4 />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
