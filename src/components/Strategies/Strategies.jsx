import React from 'react';

import './strategies.scss';

function Strategies({ side, children, src, alt }) {
  console.log(children[2]);
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

export default Strategies;
