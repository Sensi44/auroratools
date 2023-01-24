import React from 'react';
import PropTypes from 'prop-types';
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
      className={`${match ? `${classNames}--active` : classNames}`}
    >
      {children}
    </Link>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string,
  classNames: PropTypes.string,
};

export default CustomLink;
