import React from 'react';

import './mainnavigation.scss';

// eslint-disable-next-line react/display-name
const MainNavigation = React.forwardRef((props, ref) => {
  const { current } = ref;
  return (
    <>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-list__item'>
            <a
              href='#topSlide'
              onClick={() => current.goTo(0)}
              className='nav-list__item-link'
            >
              Creative Tools FZCO
            </a>
          </li>
          <li className='nav-list__item'>
            <a
              href='#strategies'
              onClick={() => current.goTo(1)}
              className='nav-list__item-link'
            >
              Strategies
            </a>
          </li>
          <li className='nav-list__item'>
            <a
              href='#services'
              onClick={() => current.goTo(2)}
              className='nav-list__item-link'
            >
              Turning and Mills tools
            </a>
          </li>
          <li className='nav-list__item'>
            <a
              href='#services2'
              onClick={() => current.goTo(3)}
              className='nav-list__item-link'
            >
              Drills and Axial tools
            </a>
          </li>
          <li className='nav-list__item'>
            <a
              href='#info'
              onClick={() => current.goTo(4)}
              className='nav-list__item-link'
            >
              About Us
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
});

export default MainNavigation;
