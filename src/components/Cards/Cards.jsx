import React from 'react';
import PropTypes from 'prop-types';

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
      <button className='cards__link'>more</button>
    </>
  );
}

Cards.propTypes = {
  children: PropTypes.object,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Cards;
