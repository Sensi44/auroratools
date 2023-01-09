import React from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';

import { Cards } from '../Cards';
import { CustomLink } from '../CustomLink';
import freza from '../../assets/img/freza.jpg';

import './products.scss';

function Products() {
  const { pathname } = useLocation();
  const { type } = useParams();

  return (
    <>
      <section id='products' className='products'>
        <div className='container'>
          <h2 className='products__topTitle'>ПРОДУКЦИЯ</h2>
          <p className='products__topText'>
            MEGATEC™ - качественный, современный, инновационный <br />и
            высокопроизводительный инструмент по конкурентным ценам.
          </p>
          <nav className='products__menu'>
            <CustomLink classNames='products__link' to='/products/turning'>
              <div className='products__cardMenu'>
                <Cards
                  src={freza}
                  alt='Фреза твердосплавная'
                  to='/products/turning'
                >
                  <h3>Название</h3>
                </Cards>
              </div>
            </CustomLink>
            <CustomLink classNames='products__link' to='/products/cutters'>
              <div className='products__cardMenu'>
                <Cards
                  src={freza}
                  alt='Фреза твердосплавная'
                  to='/products/turning'
                >
                  <h3>Название</h3>
                </Cards>
              </div>
            </CustomLink>
            <CustomLink classNames='products__link' to='/products/drill'>
              <div className='products__cardMenu'>
                <Cards
                  src={freza}
                  alt='Фреза твердосплавная'
                  to='/products/turning'
                >
                  <h3>Название</h3>
                </Cards>
              </div>
            </CustomLink>
            <CustomLink classNames='products__link' to='/products/axial'>
              <div className='products__cardMenu'>
                <Cards
                  src={freza}
                  alt='Фреза твердосплавная'
                  to='/products/turning'
                >
                  <h3>Название</h3>
                </Cards>
              </div>
            </CustomLink>
          </nav>
          {pathname === '/products' ? <div>Доп текст</div> : <Outlet />}
          {/* {console.log(type, test)} */}
          {/* {type === 'turning' ? <div>Токарный инструмент</div> : null} */}
          {/* {type === 'cutters' ? <div>Фрезы со сменными пластинами</div> : null} */}
          {/* {type === 'drill' ? <div>Сверла со сменными пластинами</div> : null} */}
          {/* {type === 'axial' ? <div>Осевой инструмент</div> : null} */}
        </div>
      </section>
    </>
  );
}

export default Products;
