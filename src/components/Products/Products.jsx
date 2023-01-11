import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Cards } from '../Cards';
import { CustomLink } from '../CustomLink';
import turning from '../../assets/img/turning.png';
import cutters from '../../assets/img/cutters.png';
import drill from '../../assets/img/drill.png';
import axial from '../../assets/img/axial.png';

import './products.scss';

function Products() {
  const { pathname } = useLocation();

  return (
    <>
      <section id='products' className='products'>
        <div className='container'>
          <h2 className='products__topTitle'>ПРОДУКЦИЯ</h2>
          <p className='products__topText'>
            MEGATEC™ - качественный, современный, инновационный <br />и
            высокопроизводительный инструмент по конкурентным ценам.
          </p>

          <nav className='products__menu' id='prod_menu'>
            <CustomLink
              classNames='products__link'
              to='/products/turning/#anchor_prod'
            >
              <div className='products__card'>
                <Cards src={turning} alt='Токарная обработка'>
                  <h3>Токарный инструмент</h3>
                </Cards>
              </div>
            </CustomLink>

            <CustomLink
              classNames='products__link'
              to='/products/cutters/#description'
            >
              <div className='products__card'>
                <Cards src={cutters} alt='Фрезы со сменными пластинами'>
                  <h3>Фрезы со сменными пластинами</h3>
                </Cards>
              </div>
            </CustomLink>

            <CustomLink
              classNames='products__link'
              to='/products/drill/#description'
            >
              <div className='products__card'>
                <Cards src={drill} alt='Свёрла со сменными пластинами'>
                  <h3>Сверла со сменными пластинами</h3>
                </Cards>
              </div>
            </CustomLink>

            <CustomLink
              classNames='products__link'
              to='/products/axial/#description'
            >
              <div className='products__card'>
                <Cards src={axial} alt='Осевой инструмент'>
                  <h3>Осевой инструмент</h3>
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
