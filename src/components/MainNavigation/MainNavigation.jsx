import React from 'react';

import './mainnavigation.scss';

// eslint-disable-next-line react/display-name
const MainNavigation = React.forwardRef((props, ref) => {
  return (
    <>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-list__item'>
            <a
              href='#topSlide'
              onClick={() => ref.current.goTo(0)}
              className='nav-list__item-link'
            >
              <span>Creative Tools</span>
            </a>
          </li>
          <li className='nav-list__item'>
            <a
              href='#strategies'
              onClick={() => ref.current.goTo(1)}
              className='nav-list__item-link'
            >
              <span>Our strategies</span>
            </a>
          </li>
          <li className='nav-list__item'>
            <a
              href='#services'
              onClick={() => ref.current.goTo(2)}
              className='nav-list__item-link'
            >
              <span>Turning and Mills tools</span>
            </a>
          </li>
          <li className='nav-list__item'>
            <a
              href='#services2'
              onClick={() => ref.current.goTo(3)}
              className='nav-list__item-link'
            >
              <span>Drills and threaded tools</span>
            </a>
          </li>
          <li className='nav-list__item'>
            <a
              href='#info'
              onClick={() => ref.current.goTo(4)}
              className='nav-list__item-link'
            >
              <span>About Us</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
});

export default MainNavigation;
