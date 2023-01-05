import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { HomePage } from '../HomePage/HomePage';
import { FormPage } from '../FormPage/FormPage';
import { CustomLink } from '../CustomLink';

import './products.scss';

// const classNames = require('classnames');

function Products() {
  const [tool, setTools] = useState('frez');
  const { type } = useParams();
  const navigate = useNavigate();
  // console.log(tool, type);
  const handleChangePage = (prop) => {
    setTools(prop);
  };

  // const selected = classNames({
  //   notChanged: tool === 'frez',
  //   change: true,
  // });

  useEffect(() => {
    const redirect = () => {
      navigate('/products/tokar');
    };
    redirect();
  }, []);

  return (
    <>
      <div>Products</div>
      <CustomLink to='/products/tokar'>tokar</CustomLink>
      <CustomLink to='/products/frez'>frez</CustomLink>
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
