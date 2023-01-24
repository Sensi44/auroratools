import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components/App';

import './assets/css/header-media.scss';
import './assets/css/footer-media.scss';
import './assets/css/contacts-media.scss';
import './assets/css/styles-media.scss';
import './assets/css/normalize.scss';
import './assets/css/fonts.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <div className='main'>
      <App />
    </div>
  </BrowserRouter>
);
