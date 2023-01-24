import React, { useLayoutEffect } from 'react';

import { SliderMain } from '../SliderMain';
import { MainNavigation } from '../MainNavigation';
import { handleScrollTo, getObservableObjects } from '../../utils/observer';
import './homepage.scss';

const HomePage = () => {
  const ref = React.createRef();

  useLayoutEffect(() => {
    getObservableObjects();

    const navList = document.querySelector('.nav-list');

    navList.addEventListener('click', handleScrollTo);
    return () => {
      navList.removeEventListener('click', handleScrollTo);
    };
  }, []);

  return (
    <>
      <SliderMain ref={ref} />
      <MainNavigation ref={ref} />
    </>
  );
};

export default HomePage;
