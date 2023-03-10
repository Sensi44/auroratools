import React from 'react';

import './mainnavigation.scss';

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
              Creative Tools FZCO
            </a>
          </li>
          <li className='nav-list__item'>
            <a
              href='#strategies'
              onClick={() => ref.current.goTo(1)}
              className='nav-list__item-link'
            >
              About Us
            </a>
          </li>
          <li className='nav-list__item'>
            <a
              href='#services'
              onClick={() => ref.current.goTo(2)}
              className='nav-list__item-link'
            >
              Turning and Mills tools
            </a>
          </li>
          <li className='nav-list__item'>
            <a
              href='#services2'
              onClick={() => ref.current.goTo(3)}
              className='nav-list__item-link'
            >
              Drills and Rotating tools
            </a>
          </li>
          <li className='nav-list__item'>
            <a
              href='#info'
              onClick={() => ref.current.goTo(4)}
              className='nav-list__item-link'
            >
              Our Philosophy
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
});

MainNavigation.displayName = 'MainNavigation';

export default MainNavigation;
