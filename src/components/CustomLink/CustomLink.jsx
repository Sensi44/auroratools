import React, { useEffect, useState } from 'react';
import { Link, useMatch, useParams } from 'react-router-dom';

const CustomLink = ({ children, to, classNames, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  const products = match ? match.pathname.slice(0, 4) : null;

  return (
    <Link
      to={to}
      {...props}
      className={`${match ? `${classNames}--active` : classNames}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
