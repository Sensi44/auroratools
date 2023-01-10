import React from 'react';

import './cards.scss';

function Cards({ children, src, alt }) {
  const title = React.cloneElement(children, {
    className: 'cards__title',
  });

  return (
    <>
      <div className='cards__image'>
        <img src={src} alt={alt} />
      </div>
      {title}
      <button className='cards__link'>Подробнее</button>
    </>
  );
}

export default Cards;
