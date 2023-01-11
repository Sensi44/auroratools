import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { debounce } from 'lodash';

import { CustomLink } from '../CustomLink';
import logo from '../../assets/img/logo.png';

import './header.scss';

function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { pathname } = useLocation();

  const { hash, key } = useLocation();
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
  }, [hash, key]);

  useEffect(() => {
    setTimeout(() => {
      if (window.scrollY > 0) {
        setShow(false);
      }
    }, 50);
  }, [pathname]);

  useEffect(() => {
    const debounceControl = debounce(() => {
      if (typeof window !== 'undefined') {
        if (window.scrollY !== 0) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    }, 25);

    window.addEventListener('scroll', debounceControl);

    return () => {
      window.removeEventListener('scroll', debounceControl);
    };
  }, [lastScrollY]);

  return (
    <header className={show ? 'header--normal' : 'header--less'} id='header'>
      <div className='header'>
        <Link to='/' className='header__logo'>
          <img src={logo} alt='Logo Auroratools' />
        </Link>
        <nav className='header_menu'>
          <CustomLink classNames='header__topMenuLink' to='/about-us'>
            О нас
          </CustomLink>

          <CustomLink classNames='header__topMenuLink' to='/products'>
            Продукция
          </CustomLink>

          <CustomLink classNames='header__topMenuLink' to='/partners'>
            Партнерам
          </CustomLink>

          <CustomLink classNames='header__topMenuLink' to='/contacts'>
            Контакты
          </CustomLink>
        </nav>
        <a href='tel:89217876660' className='header__phone'>
          +7 (921) 787-66-60
        </a>
      </div>
    </header>
  );
}

export default Header;
