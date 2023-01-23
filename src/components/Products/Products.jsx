import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Cards } from '../Cards';
import { CustomLink } from '../CustomLink';
import turning from '../../assets/img/icon_turning.png';
import cutters from '../../assets/img/icons_mills.png';
import drill from '../../assets/img/icon_drills.png';
import thread2 from '../../assets/img/icon_thread.png';

import './products.scss';

function Products() {
  const { pathname } = useLocation();

  return (
    <>
      <section id='products' className='products'>
        <div className='container'>
          <h2 className='products__topTitle'>Продукция</h2>
          <p className='products__topText'>
            MEGATEC™ - качественный, современный, инновационный <br />и
            высокопроизводительный инструмент по конкурентным ценам.
          </p>

          <nav className='products__menu' id='prod_menu'>
            <CustomLink classNames='products__link' to='/products/turning/'>
              <div className='products__card'>
                <Cards src={turning} alt='Токарная обработка'>
                  <h3>Токарный инструмент</h3>
                </Cards>
              </div>
            </CustomLink>

            <CustomLink classNames='products__link' to='/products/cutters/'>
              <div className='products__card'>
                <Cards src={cutters} alt='Фрезы со сменными пластинами'>
                  <h3>Фрезы со сменными пластинами</h3>
                </Cards>
              </div>
            </CustomLink>

            <CustomLink classNames='products__link' to='/products/drill/'>
              <div className='products__card'>
                <Cards src={drill} alt='Свёрла со сменными пластинами'>
                  <h3>Drills and drills with indexable inserts</h3>
                </Cards>
              </div>
            </CustomLink>

            <CustomLink classNames='products__link' to='/products/axial/'>
              <div className='products__card'>
                <Cards src={thread2} alt='Осевой инструмент'>
                  <h3>Threading tool</h3>
                </Cards>
              </div>
            </CustomLink>
          </nav>
          <div id='description' />
          {pathname === '/products' ? (
            <div className='products__addInfo'>
              <h3 className='products__addTitle'>Мы любим инструмент</h3>
              <p className='products__addText'>
                MEGATEC™ - качественный, современный, инновационный <br />и
                высокопроизводительный инструмент по конкурентным ценам.
              </p>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </section>
    </>
  );
}

export default Products;
