import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { debounce } from 'lodash';

import { CustomLink } from '../CustomLink';
import logo from '../../assets/img/logo.png';

import './header.scss';

function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [burger, setBurger] = useState(true);
  const { pathname, hash, key } = useLocation();

  const handleBurger = () => setBurger(!burger);

  // Плавные скролы при разных условиях
  useEffect(() => {
    if (hash === '') {
      if (
        pathname === '/products/axial/' ||
        pathname === '/products/drill/' ||
        pathname === '/products/cutters/' ||
        pathname === '/products/turning/'
      ) {
        const element = document.getElementById('description');
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
      } else {
        const element = document.getElementById('top');
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }, 0);
    }
  }, [hash, key, pathname]);

  // восстановление маленькое менюхи при переходе к центру другой страницы
  useEffect(() => {
    if (!(window.screen.width < 768)) {
      setTimeout(() => {
        if (window.scrollY > 0) {
          setShow(false);
        }
      }, 50);
    }
  }, [pathname]);

  // Схлопывание менюхи по высоте
  useEffect(() => {
    const debounceControl = debounce(() => {
      if (!(window.screen.width < 768)) {
        console.log(window.screen.width);
        if (typeof window !== 'undefined') {
          if (window.scrollY !== 0) {
            setShow(false);
          } else {
            setShow(true);
          }
          setLastScrollY(window.scrollY);
        }
      }
    }, 25);

    window.addEventListener('scroll', debounceControl);

    return () => {
      window.removeEventListener('scroll', debounceControl);
    };
  }, [lastScrollY]);

  // Закрытие меню при любом клике (по элементам или мимо)
  useEffect(() => {
    const menu = document.querySelector('.header');
    const handleClick = () => setBurger(true);
    menu.addEventListener('click', handleClick);
  }, []);

  return (
    <>
      <header
        className={`${show ? 'header--normal' : 'header--less'}`}
        id='header'
      >
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div className={`header ${burger ? 'menu--hide' : 'menu--visible'}`}>
          <Link to='/' className='header__logo'>
            <img src={logo} alt='Logo Auroratools' />
          </Link>
          <nav className='header_menu'>
            <CustomLink classNames='header__topMenuLink' to='/about-us'>
              About Us
            </CustomLink>

            <CustomLink classNames='header__topMenuLink' to='/products'>
              Products
            </CustomLink>

            <CustomLink classNames='header__topMenuLink' to='/partners'>
              Partners
            </CustomLink>

            <CustomLink classNames='header__topMenuLink' to='/contacts'>
              Contacts
            </CustomLink>
          </nav>
          <a href='tel:89217876660' className='header__phone'>
            +7 (921) 787-66-60
          </a>
        </div>
        <div className='burger'>
          <button
            className={burger ? 'burger__button--active' : 'burger__button'}
            onClick={handleBurger}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
