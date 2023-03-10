import React, { useRef } from 'react';

import { SliderProducts } from '../../SliderProducts';
import turning1 from '../../../assets/img/turning-1.jpg';
import turning2 from '../../../assets/img/turning-2-2.jpg';
import turning3 from '../../../assets/img/turning-3-3.jpg';
import turSlide1 from '../../../assets/img/tur-slide-1.jpg';
import turSlide2 from '../../../assets/img/tur-slide-2-2.jpg';
import turSlide3 from '../../../assets/img/tur-slide-3.jpg';
import turSlide4 from '../../../assets/img/tur-slide-4.jpg';

import './pages.scss';

function Page1() {
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const handleClick = (a) => {
    const wrapper = a.current;
    wrapper.classList.toggle('is-wrapper-open');
  };

  return (
    <>
      <article id='turning' className='toolsPage'>
        <h3 className='toolsPage__mainTitle'>Turning tools</h3>

        <div className='toolsPage__topInfo topInfo'>
          <div className='topInfo__left'>
            <p className='topInfo__text'>
              The program counts tool holders for external, internal, processing
              operations, including grooving, parting off and threading.
            </p>
            <br />
            <p className='topInfo__text'>
              Innovative turning program of coated (CVD / PVD) tungsten carbide,
              cermet also CBN and PCD grades.
              <br />
              D, P, M, S holder clamping types.
              <br />
              Positive and Negative insert geometries
              <br />
            </p>
            <a href='/e' target='_blank' className='topInfo__downloadButton'>
              Download PDF
            </a>
          </div>

          <div className='topInfo__right'>
            <div className='topInfo__slider'>
              <SliderProducts
                arr={[turSlide1, turSlide4, turSlide3, turSlide2]}
              />
            </div>
          </div>
        </div>

        <div className='toolsPage__tools tools'>
          <p className='toolsPage__mainTitle toolsPage__addTitle'>
            Turning program
          </p>

          <div ref={ref} className='tools__collapse collapse'>
            <button
              className='collapse__header'
              type='menu-fold'
              onClick={() => handleClick(ref)}
            >
              External processing
            </button>
            <div className='collapse_body'>
              <h4 className='collapse__title'>
                Heavy Roughing geometry for high metal removal
              </h4>
              <img
                className='collapse__img'
                src={turning1}
                alt='Фото инструмента'
              />
              <p className='collapse__text'>
                Wide range of external processing holders (from 8x8 mm and up to
                50x50 mm shank size square).
              </p>
              <br />
              <p className='collapse__text'>
                Inserts for all types of operation (from finishing to medium,
                roughing and heavy turning operations).
              </p>
              {/* <br /> */}
              {/* <p className='collapse__text'> */}
              {/*   Инновационное высокоэффективное покрытие MxP и прецизионно */}
              {/*   заточенные стружечные канавки гарантируют плавное удаление */}
              {/*   стружки из отверстия */}
              {/* </p> */}
              <div className='collapse__info'>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Geometry application</h5>
                  <p className='collapse__textMark'>
                    Finishing to semi-finishing
                  </p>
                  <br />
                  <p className='collapse__textMark'>Multi-purpose geometry</p>
                  <br />
                  <p className='collapse__textMark'>General machining</p>
                  <br />
                  <p className='collapse__textMark'>
                    General purpose to light roughing
                  </p>
                  <br />
                  <p className='collapse__textMark'>Roughing</p>
                  <br />
                  <p className='collapse__textMark'>High metal removal</p>
                  <br />
                </div>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Chipbreaker profile</h5>
                  <p className='collapse__textMark'>
                    Excellent surface finishes
                  </p>
                  <br />
                  <p className='collapse__textMark'>Effective chip-control</p>
                  <br />
                  <p className='collapse__textMark'>Low cutting forces</p>
                  <br />
                  <p className='collapse__textMark'>
                    Strong cutting edge for reliability
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Suitable for interrupted cuts
                  </p>
                  <br />
                  <p className='collapse__textMark'>High metal removal</p>
                  <br />
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
              Internal processing program
            </button>
            <div className='collapse_body'>
              <h4 className='collapse__title'>
                Boring bars, and modular cartridge dumping boring bar systems
                with working length up to 14D
              </h4>
              <img
                className='collapse__img'
                src={turning2}
                alt='Фото инструмента'
              />
              <p className='collapse__text'>
                Internal processing program includes also damping boring bars,
                HSSPM made boring tool holders, carbide boring bars.
                <br />
                Solid steel, Carbide body, HSSE (PM) body, dumping boring bar
                system Internal coolant supply
              </p>
              <div className='collapse__info'>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Parameters</h5>
                  <p className='collapse__textMark'>
                    Standard boring bar diameter
                    <br /> range from 8-50 mm
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Working length 3D, 4D, 5D
                  </p>
                </div>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Advanteges</h5>
                  <p className='collapse__textMark'>
                    Antivibration dumping boring bars, with modular cartridges
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Diameter range from 10-60 mm
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Working length 5D, 8D, 10D, 12D, 14D
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
              Modular Turning System
            </button>
            <div className='collapse_body'>
              <h4 className='collapse__title'>
                Modular turning system based on VDI 40 type A
              </h4>
              <img
                className='collapse__img'
                src={turning3}
                alt='Фото инструмента'
              />
              <p className='collapse__text'>
                Modular Turning System with direct cartridge clamping on the
                machine turret guaranties outstanding working performances.
              </p>
              <div className='collapse__info'>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>
                    Available turret coupling range
                  </h5>
                  <p className='collapse__textMark'>BMT</p>
                  <br />
                  <p className='collapse__textMark'>DOOSAN</p>
                  <br />
                  <p className='collapse__textMark'>BIGLIA-2</p>
                  <br />
                  <p className='collapse__textMark'>VDI</p>
                  <br />
                  <p className='collapse__textMark'>CAPTO 4-5-6</p>
                </div>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Advanteges</h5>
                  <p className='collapse__textMark'>
                    High precision positioning
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Quick change cartridge system
                  </p>
                  <br />
                  <p className='collapse__textMark'>Same coordinate data</p>
                  <br />
                  <p className='collapse__textMark'>Excellent repeatability</p>
                  <br />
                  <p className='collapse__textMark'>Highest tool rigidity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Page1;
