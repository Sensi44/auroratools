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
          <h2 className='products__topTitle'>Products</h2>
          <p className='products__topText'>
            Creative Tools is innovative, premium quality cutting tool brand,
            with its location in UAE.
            <br /> It combines excellent products, premium customer service,
            attractive prices.
          </p>

          <nav className='products__menu' id='prod_menu'>
            <CustomLink classNames='products__link' to='/products/turning/'>
              <div className='products__card'>
                <Cards src={turning} alt='Turning tools'>
                  <h3>Turning tools</h3>
                </Cards>
              </div>
            </CustomLink>

            <CustomLink classNames='products__link' to='/products/mill/'>
              <div className='products__card'>
                <Cards src={cutters} alt='milling tool solutions'>
                  <h3>Milling tools</h3>
                </Cards>
              </div>
            </CustomLink>

            <CustomLink classNames='products__link' to='/products/drill/'>
              <div className='products__card'>
                <Cards src={drill} alt='drills with indexable inserts'>
                  <h3>Drills and drills with indexable inserts</h3>
                </Cards>
              </div>
            </CustomLink>

            <CustomLink classNames='products__link' to='/products/thread/'>
              <div className='products__card'>
                <Cards src={thread2} alt='Threading tool'>
                  <h3>Threading tool</h3>
                </Cards>
              </div>
            </CustomLink>
          </nav>
          <div id='description' />
          {pathname === '/products' ? (
            <div className='products__addInfo'>
              {/* <h3 className='products__addTitle'>E</h3> */}
              {/* <p className='products__addText'>A</p> */}
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
