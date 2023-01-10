import React from 'react';
import { Link } from 'react-router-dom';

import './service.scss';

function Service({ children, src, alt, to }) {
  const title = React.cloneElement(children[0], {
    className: 'service__title',
  });
  const text = React.cloneElement(children[1], {
    className: 'service__text',
  });

  return (
    <>
      <div className='service'>
        <div className='service__image'>
          <img src={src} alt={alt} />
        </div>
        <div className='service__info'>
          {title}
          {text}
        </div>
        <Link className='service__link' to={to}>
          Подробнее
        </Link>
      </div>
    </>
  );
}

export default Service;
