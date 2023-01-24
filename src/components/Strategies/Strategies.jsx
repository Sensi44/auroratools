import React from 'react';
import PropTypes from 'prop-types';

import './strategies.scss';

function Strategies({ side, children, src, alt }) {
  const title = React.cloneElement(children[0], {
    className: 'strategy__title',
  });
  const text = React.cloneElement(children[1], {
    className: 'strategy__text',
  });

  return (
    <>
      <div className={side ? 'strategy' : 'strategy reverse'}>
        <div className='strategy__image'>
          <img src={src} alt={alt} />
        </div>
        <div className='strategy__info'>
          {title}
          {text}
        </div>
      </div>
    </>
  );
}

Strategies.propTypes = {
  side: PropTypes.bool,
  chi: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Strategies;
