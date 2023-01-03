import React, { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

const fetchRandomNumber = () => Promise.resolve(Math.random());

// получение window.scrollY вынесли в функцию
const getWindowScrollY = () => window.scrollY;
const useWindowScrollY = () => {
  const [scroll, setScroll] = useState(getWindowScrollY);

  useEffect(() => {
    const handleScroll = throttle(() => setScroll(window.scrollY), 37);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scroll;
}

const NumberAndScroll = () => {
  const [number, setNumber] = useState();
  const scroll = useWindowScrollY();

  useEffect(() => {
    fetchRandomNumber().then(setNumber);
  }, []);

  return (
    <div>
      <div> Number: { number } </div>
      <div> Scroll: { scroll } </div>
    </div>
  )
}