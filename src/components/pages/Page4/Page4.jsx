import React, { useRef } from 'react';

import { SliderProducts } from '../../SliderProducts';
import thread1 from '../../../assets/img/thread-1.jpg';
import thread2 from '../../../assets/img/thread-4.jpg';
import thread3 from '../../../assets/img/thread-3.jpg';
import threadSlide1 from '../../../assets/img/thread-slide-1.jpg';
import threadSlide2 from '../../../assets/img/thread-slide-2.jpg';
import threadSlide3 from '../../../assets/img/thread-slide-3.jpg';
import threadSlide4 from '../../../assets/img/thread-slide-4.jpg';

function Page4() {
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const handleClick = (a) => {
    const wrapper = a.current;
    wrapper.classList.toggle('is-wrapper-open');
  };

  return (
    <>
      <article id='threads' className='toolsPage'>
        <h3 className='toolsPage__mainTitle'>Threading tools</h3>

        <div className='toolsPage__topInfo topInfo'>
          <div className='topInfo__left'>
            <p className='topInfo__text'>
              Creative Tools threading program includes:
              <br />
              • Tapping thread technology (Machine and Hand Taps).
              <br />
              • Rolling (forming) thread technology by Forming taps.
              <br />
              • Thread milling by indexable thread mills and solid carbide
              thread milling cutters.
              <br />
            </p>
            <a href='/e' target='_blank' className='topInfo__downloadButton'>
              Скачать PDF
            </a>
          </div>

          <div className='topInfo__right'>
            <div className='topInfo__slider'>
              <SliderProducts
                arr={[threadSlide1, threadSlide2, threadSlide3, threadSlide4]}
              />
            </div>
          </div>
        </div>

        <div className='toolsPage__tools tools'>
          <h3 className='toolsPage__mainTitle toolsPage__addTitle'>
            Threading Tools program
          </h3>

          <div ref={ref} className='tools__collapse collapse'>
            <button
              className='collapse__header'
              type='menu-fold'
              onClick={() => handleClick(ref)}
            >
              Tapping
            </button>
            <div className='collapse_body'>
              <h4 className='collapse__title'>
                Through hole machine tap for universal machining
              </h4>
              <img
                className='collapse__img'
                src={thread1}
                alt='Фото инструмента'
              />
              <p className='collapse__text'>
                Tap threading with blind and through hole types of machine taps
                and hand taps processing.
              </p>
              <br />
              <p className='collapse__text'>
                General program starts from M2 and finishes at M52. (Standart
                range available MF, UN, G, NPT threads)
              </p>
              <div className='collapse__info'>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Tap program</h5>
                  <p className='collapse__textMark'>
                    Machine taps for blind and through holes
                  </p>
                  <br />
                  <p className='collapse__textMark'>Hand tap set with pilot</p>
                  <br />
                  <p className='collapse__textMark'>Hand tap set universal</p>
                </div>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Advantages</h5>
                  <p className='collapse__textMark'>Reliable process</p>
                  <br />
                  <p className='collapse__textMark'>Repeat thread tolerance</p>
                  <br />
                  <p className='collapse__textMark'>Long tool life</p>
                  <br />
                  <p className='collapse__textMark'>Low instrumental cost</p>
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
              Forming
            </button>
            <div className='collapse_body'>
              <h4 className='collapse__title'>
                Machine forming tap with oil feed gashes
              </h4>
              <img
                className='collapse__img'
                src={thread3}
                alt='Фото инструмента'
              />
              <p className='collapse__text'>Thread forming by forming taps.</p>
              <br />
              <p className='collapse__text'>
                Standart program includes the following types of threads (M, MF,
                G).
              </p>
              <div className='collapse__info'>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Parameters</h5>
                  <p className='collapse__textMark'>
                    Designed for forming thread in blind and through hole types
                  </p>
                  <br />
                  <p className='collapse__textMark'>Special HSSEPM material</p>
                  <br />
                  <p className='collapse__textMark'>Innovative coatings</p>
                </div>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Advantages</h5>
                  <p className='collapse__textMark'>
                    Outstanding level of productivity
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Forming thread in materials up to 35 HRC
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
              Thread milling
            </button>
            <div className='collapse_body'>
              <h4 className='collapse__title'>
                Thread milling cutter with indexable inserts
              </h4>
              <img
                className='collapse__img'
                src={thread2}
                alt='Фото инструмента'
              />
              <p className='collapse__text'>
                Thread milling cutters (The program counts solid tools and
                indexable inserts tool program).
              </p>

              <div className='collapse__info'>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Standard range</h5>
                  <p className='collapse__textMark'>
                    Solid carbide thread cutter diameter range from M2 up to M36
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Indexable thread mill cutter diameter range from M12 up to
                    M52
                  </p>
                </div>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Advantages</h5>
                  <p className='collapse__textMark'>Stable threading process</p>
                  <br />
                  <p className='collapse__textMark'>High productive process</p>
                  <br />
                  <p className='collapse__textMark'>Low instrumental cost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Page4;
