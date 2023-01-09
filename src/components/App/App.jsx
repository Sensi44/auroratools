import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout';

import { HomePage } from '../HomePage';
import { Products } from '../Products';
import { AboutUs } from '../AboutUs';
import { Contacts } from '../Contacts';
import { Partners } from '../Partners';

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
            <Route path='turning' element={<div>Токарный инструмент</div>} />
            <Route path='cutters' element={<div>Фрезерный</div>} />
            <Route path='drill' element={<div>Свёрла</div>} />
            <Route path='axial' element={<div>Осевой</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
