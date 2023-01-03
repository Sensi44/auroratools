import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout';

import { HomePage } from '../HomePage/HomePage';
import { FormPage } from '../FormPage/FormPage';
import { Products } from '../Products';

import './App.scss';

function App() {
  const test = <FormPage />;
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/test' element={<div>1123123123</div>} />
          <Route path='/form' element={test} />
          <Route path='/products/' element={<Products />} />
          <Route path='/products/:type' element={<Products />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
