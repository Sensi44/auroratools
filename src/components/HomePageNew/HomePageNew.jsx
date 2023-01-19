import React, { useLayoutEffect } from 'react';

import { SliderMain2 } from '../SliderMain2';
import { MainNavigation } from '../MainNavigation';
import { handleScrollTo, getObservableObjects } from '../../utils/observer';
import './homepagenew.scss';

const HomePageNew = () => {
  const ref = React.createRef();
  console.log('a');
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
      <SliderMain2 ref={ref} />
      <MainNavigation ref={ref} />
    </>
  );
};

export default HomePageNew;
