import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';

import { CustomLink } from '../CustomLink';
import logo from '../../assets/img/logo.png';

import './header.scss';

function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [burger, setBurger] = useState(true);
  const [array, setArray] = useState([]);
  const [elem, setElem] = useState(0);
  const { pathname, hash, key } = useLocation();
  const navigate = useNavigate();
  const link = ['about-us', 'products', 'partners', 'contacts'];

  const body = document.body;

  const handleBurger = () => {
    setBurger(!burger);
    body.classList.toggle('modal-open');
  };

  useEffect(() => {
    const elems = document.querySelectorAll('.modal-slide');
    const arr = Array.from(elems);
    arr.forEach((el, i) => {
      if (el.classList.contains('header__topMenuLink--active')) {
        setElem(i);
      }
    });
    setArray(arr);
  }, []);
  console.log(elem, array);

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
    const handleClick = () => {
      setBurger(true);
      body.classList.toggle('modal-open');
    };
    menu.addEventListener('click', handleClick);
  }, []);

  // Свайп в модальном окне
  useEffect(() => {
    const container = document.querySelector('header');
    console.log(container);

    container.addEventListener('touchstart', startTouch, false);
    container.addEventListener('touchmove', moveTouch, false);

    // Swipe Up / Down / Left / Right
    let initialX = null;
    let initialY = null;

    function startTouch(e) {
      initialX = e.touches[0].clientX;
      initialY = e.touches[0].clientY;
    }

    function moveTouch(e) {
      if (initialX === null) {
        return;
      }

      if (initialY === null) {
        return;
      }

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;

      const diffX = initialX - currentX;
      const diffY = initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
          // swiped left
          if (elem > 0) {
            navigate(link[elem - 1]);
            setElem(elem - 1);
          }
        } else {
          // swiped right
          // eslint-disable-next-line no-lonely-if
          if (elem < 3) {
            navigate(link[elem + 1]);
            setElem(elem + 1);
          }
        }
      }
      if (diffX <= 0) {
        if (diffY > 0) {
          // swiped up
          console.log('swiped up');
          if (elem > 0) {
            navigate(link[elem - 1]);
            setElem(elem - 1);
          }
        } else {
          // swiped down
          console.log('swiped down');
          if (elem < 3) {
            navigate(link[elem + 1]);
            setElem(elem + 1);
          }
        }
      }

      initialX = null;
      initialY = null;

      e.preventDefault();
    }
  }, [elem, array]);

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
            <CustomLink
              classNames='modal-slide header__topMenuLink'
              to='/about-us'
            >
              About Us
            </CustomLink>

            <CustomLink
              classNames='modal-slide header__topMenuLink'
              to='/products'
            >
              Products
            </CustomLink>

            <CustomLink
              classNames='modal-slide header__topMenuLink'
              to='/partners'
            >
              Partners
            </CustomLink>

            <CustomLink
              classNames='modal-slide header__topMenuLink'
              to='/contacts'
            >
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
