import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout';

import { HomePage } from '../HomePage/HomePage';
import { FormPage } from '../FormPage/FormPage';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/test' element={<div>1123123123</div>} />
          <Route path='/form' element={<FormPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
