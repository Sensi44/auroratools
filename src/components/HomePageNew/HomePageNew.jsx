import React, { useEffect } from 'react';

import { SliderMain2 } from '../SliderMain2';
import { MainNavigation } from '../MainNavigation';

import './homepagenew.scss';

const HomePageNew = () => {
  const ref = React.createRef();

  useEffect(() => {
    const getId = (link) => link.getAttribute('href').replace('#', '');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelectorAll('.nav-list__item-link')
              .forEach((link) => {
                link.classList.toggle(
                  'nav-list__item-link--active',
                  getId(link) === entry.target.id
                );
              });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    document.querySelectorAll('.scrollSlide').forEach((section) => {
      console.log(section);
      return observer.observe(section);
    });

    document.querySelector('.nav-list').addEventListener('click', (event) => {
      if (event.target.classList.contains('nav-list__item-link')) {
        event.preventDefault();

        window.scrollTo({
          top: document.getElementById(getId(event.target)).offsetTop,
          behavior: 'smooth',
        });
      }
    });
  }, []);

  return (
    <>
      <MainNavigation ref={ref} />
      <SliderMain2 ref={ref} />
    </>
  );
};

export default HomePageNew;
