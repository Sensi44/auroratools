import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components/App';
// import 'antd/dist/antd.min.css';
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
