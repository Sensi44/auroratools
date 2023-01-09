import React from 'react';
import { Link } from 'react-router-dom';

import { CustomLink } from '../CustomLink';
import logo from '../../assets/img/logo.png';

import './header.scss';

function Header() {
  return (
    <header>
      <div className='header'>
        <Link to='/' className='header__logo'>
          <img src={logo} alt='Logo Auroratools' />
        </Link>
        <nav className='header_menu'>
          <CustomLink classNames='header__topMenuLink' to='/about-us'>
            О нас
          </CustomLink>
          <CustomLink classNames='header__topMenuLink' to='/products/frez'>
            Продукция
          </CustomLink>
          <CustomLink classNames='header__topMenuLink' to='/partners'>
            Партнерам
          </CustomLink>
          <CustomLink classNames='header__topMenuLink' to='/contacts'>
            Контакты
          </CustomLink>
        </nav>
        <a href='tel:88129700100' className='header__phone'>
          +7 (921) 787-66-60
        </a>
      </div>
    </header>
  );
}

export default Header;
