import React from 'react';

import './cards.scss';

function Cards({ children, src, alt, to }) {
  const title = React.cloneElement(children, {
    className: 'cards__title',
  });

  return (
    <>
      <div className='cards__image'>
        <img src={src} alt={alt} />
      </div>
      {title}
      <button className='cards__link' to={to}>
        Подробнее
      </button>
    </>
  );
}

export default Cards;
