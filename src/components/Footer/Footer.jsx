import React, { useEffect, useLayoutEffect, useState } from 'react';

import './footer.scss';

function Footer() {
  useEffect(() => {
    console.log('Дочерний useEffect');
  }, []);

  useLayoutEffect(() => {
    console.log('Дочерний useLayoutEffect');
  }, []);

  console.log('Дочерний рендер');

  return (
    <>
      <footer>Footer</footer>
    </>
  );
}

export default Footer;
