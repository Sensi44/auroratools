import React, { useRef } from 'react';

import { SliderProducts } from '../../SliderProducts';
import mills1 from '../../../assets/img/mills-1-1.jpg';
import mills2 from '../../../assets/img/mills-2.jpg';
import mills3 from '../../../assets/img/mills-3.jpg';
import millSlide1 from '../../../assets/img/mills-slide-1.jpg';
import millSlide2 from '../../../assets/img/mills-slide-2.jpg';
import millSlide3 from '../../../assets/img/mills-slide-3.jpg';
import millSlide4 from '../../../assets/img/mills-slide-4.jpg';

function Page2() {
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const handleClick = (a) => {
    const wrapper = a.current;
    wrapper.classList.toggle('is-wrapper-open');
  };

  return (
    <>
      <article id='Mills' className='toolsPage'>
        <h3 className='toolsPage__mainTitle'>Milling tools</h3>

        <div className='toolsPage__topInfo topInfo'>
          <div className='topInfo__left'>
            <p className='topInfo__text'>
              Unique instrumental geometries and design, microgeometry control,
              cutting edge preparation, stabile tool construction, allow to
              reduce existing cutting forces and increase instrumental
              productivity and the tool life.
            </p>
            <br />
            <p className='topInfo__text'>
              This helps to process a very wide range of machining materials as
              tough, hardened, or exotic materials.
            </p>
            <a href='/e' target='_blank' className='topInfo__downloadButton'>
              Download PDF
            </a>
          </div>

          <div className='topInfo__right'>
            <div className='topInfo__slider'>
              <SliderProducts
                arr={[millSlide1, millSlide2, millSlide3, millSlide4]}
              />
            </div>
          </div>
        </div>

        <div className='toolsPage__tools tools'>
          <p className='toolsPage__mainTitle toolsPage__addTitle'>
            Milling program
          </p>

          <div ref={ref} className='tools__collapse collapse'>
            <button
              className='collapse__header'
              type='menu-fold'
              onClick={() => handleClick(ref)}
            >
              Indexable milling program
            </button>
            <div className='collapse_body'>
              <h4 className='collapse__title'>
                Copy milling cutter with round insert for Mold and Die industry
              </h4>
              <img
                className='collapse__img'
                src={mills3}
                alt='Фото инструмента'
              />
              <p className='collapse__text'>
                Indexable milling program counts numerous cutters for effective
                plan, wall, curve surface application.
              </p>
              <br />
              <p className='collapse__text'>
                Unique design and performance of new generation high feed
                indexable milling tools.
              </p>
              <br />
              <p className='collapse__text'>
                Innovative milling program for the universal and CNC milling
                machines.
              </p>
              <div className='collapse__info'>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Parameters</h5>
                  <p className='collapse__textMark'>
                    Standard mill range diameter
                    <br /> from 12 mm up to 350 mm
                  </p>
                  <br />
                  <p className='collapse__textMark'>Depth of cut up to 11 mm</p>
                  <br />
                  <p className='collapse__textMark'>
                    Tooth feed up to 3 mm per tooth
                  </p>
                  <br />
                </div>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Advantages</h5>
                  <p className='collapse__textMark'>Low cutting forces</p>
                  <br />
                  <p className='collapse__textMark'>Stable construction</p>
                  <br />
                  <p className='collapse__textMark'>High productivity</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={ref2} className='tools__collapse collapse'>
            <button
              className='collapse__header'
              type='menu-fold'
              onClick={() => handleClick(ref2)}
            >
              Solid carbide milling program
            </button>
            <div className='collapse_body'>
              <h4 className='collapse__title'>
                High performance solid carbide slot milling cutter for tough
                materials application
              </h4>
              <img
                className='collapse__img'
                src={mills2}
                alt='Фото инструмента'
              />
              <p className='collapse__text'>
                Solid carbide milling program covers wide range of application
                materials as steels, stainless steels, aluminum alloys, cast
                iron, and other materials.
              </p>
              <br />
              <p className='collapse__text'>
                High performance milling tools for general use, also high feed
                and trochoidal processing application.
              </p>
              <div className='collapse__info'>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Parameters</h5>
                  <p className='collapse__textMark'>
                    Standard mill range diameter
                    <br /> from 2 mm up to 25 mm
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Mills with 2 / 3 / 4 / 6 / 8 flutes design
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Variable helical rake design
                  </p>
                  <br />
                  <p className='collapse__textMark'>Center cutting</p>
                  <br />
                  <p className='collapse__textMark'>Micro grain carbide</p>
                  <br />
                  <p className='collapse__textMark'>Innovative coatings</p>
                </div>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Advantages</h5>
                  <p className='collapse__textMark'>
                    For high performance roughing and finishing
                  </p>
                  <br />
                  <p className='collapse__textMark'>Optimal chip removal</p>
                  <br />
                  <p className='collapse__textMark'>
                    Productive machining rate
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div ref={ref3} className='tools__collapse collapse'>
            <button
              className='collapse__header'
              type='menu-fold'
              onClick={() => handleClick(ref3)}
            >
              Special products
            </button>
            <div className='collapse_body'>
              <h4 className='collapse__title'>
                Special milling cutter designed under customized aspects
              </h4>
              <img
                className='collapse__img'
                src={mills1}
                alt='Фото инструмента'
              />
              <p className='collapse__text'>
                Special products under customized tool solution.
              </p>
              <div className='collapse__info'>
                <div className='collapse__descriptions'>
                  {/* <h5 className='collapse__desTitle'>Параметры</h5> */}
                  <p className='collapse__textMark'>
                    Implementation of the special tools at the customer
                    production facilities
                  </p>
                </div>
                <div className='collapse__descriptions'>
                  {/* <h5 className='collapse__desTitle'>Преимущества</h5> */}
                  <p className='collapse__textMark'>
                    Special tool design under customized requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Page2;
