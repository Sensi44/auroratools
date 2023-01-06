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
      className={classNames}
      style={{
        color: match ? 'black' : 'gray',
        backgroundColor: match ? 'orange' : 'var(--color-active)',
        padding: '5px',
        margin: '5px',
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
