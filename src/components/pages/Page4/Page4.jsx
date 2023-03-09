import React, { useRef } from 'react';

import { SliderProducts } from '../../SliderProducts';
import thread1 from '../../../assets/img/thread-1.jpg';
import thread2 from '../../../assets/img/thread-4.jpg';
import thread3 from '../../../assets/img/thread-3.jpg';
import threadSlide1 from '../../../assets/img/thread-slide-1.jpg';
import threadSlide2 from '../../../assets/img/thread-slide-2.jpg';
import threadSlide3 from '../../../assets/img/thread-slide-3.jpg';

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
                arr={[threadSlide1, threadSlide2, threadSlide3]}
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
                Надёжное удаление стружки благодаря более короткой стружке
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
                  <h5 className='collapse__desTitle'>Параметры</h5>
                  <p className='collapse__textMark'>
                    Доступны параметры от 4 до 20мм и исполнения SxD, 8xD и 12xD
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Инновационное высокоэффективное покрытие MxP
                  </p>
                </div>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Преимущества</h5>
                  <p className='collapse__textMark'>
                    Оптимальное удаление стружки
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Возможны высокие значения подачи
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Преимущества с точки зрения стойкости инструмента по
                    сравнению с предыдущими моделями
                  </p>
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
                Надёжное удаление стружки благодаря более короткой стружке
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
                  <h5 className='collapse__desTitle'>Параметры</h5>
                  <p className='collapse__textMark'>
                    Доступны параметры от 4 до 20мм и исполнения SxD, 8xD и 12xD
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Инновационное высокоэффективное покрытие MxP
                  </p>
                </div>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Преимущества</h5>
                  <p className='collapse__textMark'>
                    Оптимальное удаление стружки
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Возможны высокие значения подачи
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Преимущества с точки зрения стойкости инструмента по
                    сравнению с предыдущими моделями
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
                Надёжное удаление стружки благодаря более короткой стружке
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
                  <h5 className='collapse__desTitle'>Параметры</h5>
                  <p className='collapse__textMark'>
                    Доступны параметры от 4 до 20мм и исполнения SxD, 8xD и 12xD
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Инновационное высокоэффективное покрытие MxP
                  </p>
                </div>
                <div className='collapse__descriptions'>
                  <h5 className='collapse__desTitle'>Преимущества</h5>
                  <p className='collapse__textMark'>
                    Оптимальное удаление стружки
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Возможны высокие значения подачи
                  </p>
                  <br />
                  <p className='collapse__textMark'>
                    Преимущества с точки зрения стойкости инструмента по
                    сравнению с предыдущими моделями
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

export default Page4;
