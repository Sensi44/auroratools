import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, classNames, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    <Link
      to={to}
      {...props}
      className={match ? `${classNames}--active` : classNames}
      // style={{
      //   color: match ? '#a46455' : '#000000',
      // }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
