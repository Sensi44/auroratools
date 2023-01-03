import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { HomePage } from '../HomePage/HomePage';
import { FormPage } from '../FormPage/FormPage';

import './Products.scss';

// const classNames = require('classnames');

function Products() {
  const [tool, setTools] = useState('frez');
  const { type } = useParams();
  console.log(tool, type);
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
      <Link to='/products/tokar' className='newArticle'>
        tokar
      </Link>
      <br />
      <Link to='/products/frez' className='newArticle'>
        frez
      </Link>
      <br />
      <br />
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
      {type === 'frez' ? <HomePage /> : null}
      {type === 'tokar' ? <FormPage /> : null}
      {type === 'mill' ? <Products /> : null}
    </>
  );
}

export default Products;
