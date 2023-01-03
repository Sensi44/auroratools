import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout';

import { HomePage } from '../HomePage/HomePage';
import { FormPage } from '../FormPage/FormPage';
import { Products } from '../Products';
import { AboutUs } from '../AboutUs';
import { Contacts } from '../Contacts';
import { Partners } from '../Partners';

import './App.scss';

function App() {
  const test = <FormPage />;
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/test123' element={<div>1123123123</div>} />
          <Route path='/form' element={test} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/products/' element={<Products />} />
          <Route path='/products/:type' element={<Products />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
