import React, { useState } from 'react';

import { HomePage } from '../HomePage/HomePage';
import { FormPage } from '../FormPage/FormPage';

import './Products.scss';

const classNames = require('classnames');

function Products() {
  const [tool, setTools] = useState('frez');
  console.log(tool);
  const handleChangePage = (prop) => {
    setTools(prop);
  };

  // const selected = classNames({
  //   notChanged: tool === 'frez',
  //   change: true,
  // });

  return (
    <>
      <div>Products</div>
      <button
        onClick={() => handleChangePage('frez')}
        className={tool === 'frez' ? 'selected' : ''}
      >
        111
      </button>
      <button
        onClick={() => handleChangePage('tokar')}
        className={tool === 'tokar' ? 'selected' : ''}
      >
        222
      </button>
      <button
        onClick={() => handleChangePage('mill')}
        className={tool === 'mill' ? 'selected' : ''}
      >
        333
      </button>
      {tool === 'frez' ? <HomePage /> : null}
      {tool === 'tokar' ? <FormPage /> : null}
      {tool === 'mill' ? <Products /> : null}
    </>
  );
}

export default Products;
