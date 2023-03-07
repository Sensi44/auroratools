import React, { useRef } from 'react';

import { SliderProducts } from '../../SliderProducts';
import turning1 from '../../../assets/img/turning-1.jpg';
import turning2 from '../../../assets/img/turning-2.jpg';
import turning3 from '../../../assets/img/turning-3.jpg';
import turSlide1 from '../../../assets/img/tur-slide-1.jpg';
import turSlide2 from '../../../assets/img/tur-slide-2.jpg';
import turSlide3 from '../../../assets/img/tur-slide-3.jpg';

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
              The program starts from smaller holders with square 8x8 mm, and
              finishes with bigger size holders with square 50x50 mm
            </p>
            <br />
            <p className='topInfo__text'>
              In the program you can find indexable cutting inserts, which can
              process internal diameter starting from 5,5 mm and also there
              possible to find big inserts with cutting edge length 25 mm and
              more.
            </p>
            <a href='/e' target='_blank' className='topInfo__downloadButton'>
              Download PDF
            </a>
          </div>

          <div className='topInfo__right'>
            <div className='topInfo__slider'>
              <SliderProducts arr={[turSlide1, turSlide2, turSlide3]} />
            </div>
          </div>
        </div>

        <div className='toolsPage__tools tools'>
          <p className='toolsPage__mainTitle toolsPage__addTitle'>
            Creative Tools Turning program offer: <br />
            • External processing tools <br />
            • Internal processing operation <br />
            • Threading (internal and external) processing operation <br />
            • Parting off and grooving operation <br />
            • Automatic lathe machine tools <br />
            • Special tools <br />
          </p>

          <div ref={ref} className='tools__collapse collapse'>
            <button
              className='collapse__header'
              type='menu-fold'
              onClick={() => handleClick(ref)}
            >
              Tritan-Drill-Uni-Plus
            </button>
            <div className='collapse_body'>
              <h4 className='collapse__title'>
                Надёжное удаление стружки благодаря более короткой стружке
              </h4>
              <img
                className='collapse__img'
                src={turning1}
                alt='Фото инструмента'
              />
              <p className='collapse__text'>
                Свёрла Tritan с тремя режущими кромками получили широкое
                распространение благодаря своим основным преимуществам в
                отношении экономической эффективности. Непрерывные дальнейшие
                разработки улучшают производительность этих инструментов во
                многих отношениях.
              </p>
              <br />
              <p className='collapse__text'>
                Самоцентрирующаяся кромка долота и инновационное утончение
                вершины - геометрические особенности нового сверла
                Tritan-Drill-Plus. Они обеспечивают более короткие чипы
              </p>
              <br />
              <p className='collapse__text'>
                Инновационное высокоэффективное покрытие MxP и прецизионно
                заточенные стружечные канавки гарантируют плавное удаление
                стружки из отверстия
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
              Tritan-Drill-Uni-Plus
            </button>
            <div className='collapse_body'>
              <h4 className='collapse__title'>
                Надёжное удаление стружки благодаря более короткой стружке
              </h4>
              <img
                className='collapse__img'
                src={turning2}
                alt='Фото инструмента'
              />
              <p className='collapse__text'>
                Свёрла Tritan с тремя режущими кромками получили широкое
                распространение благодаря своим основным преимуществам в
                отношении экономической эффективности. Непрерывные дальнейшие
                разработки улучшают производительность этих инструментов во
                многих отношениях.
              </p>
              <br />
              <p className='collapse__text'>
                Самоцентрирующаяся кромка долота и инновационное утончение
                вершины - геометрические особенности нового сверла
                Tritan-Drill-Plus. Они обеспечивают более короткие чипы
              </p>
              <br />
              <p className='collapse__text'>
                Инновационное высокоэффективное покрытие MxP и прецизионно
                заточенные стружечные канавки гарантируют плавное удаление
                стружки из отверстия
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
              Tritan-Drill-Uni-Plus
            </button>
            <div className='collapse_body'>
              <h4 className='collapse__title'>
                Надёжное удаление стружки благодаря более короткой стружке
              </h4>
              <img
                className='collapse__img'
                src={turning3}
                alt='Фото инструмента'
              />
              <p className='collapse__text'>
                Свёрла Tritan с тремя режущими кромками получили широкое
                распространение благодаря своим основным преимуществам в
                отношении экономической эффективности. Непрерывные дальнейшие
                разработки улучшают производительность этих инструментов во
                многих отношениях.
              </p>
              <br />
              <p className='collapse__text'>
                Самоцентрирующаяся кромка долота и инновационное утончение
                вершины - геометрические особенности нового сверла
                Tritan-Drill-Plus. Они обеспечивают более короткие чипы
              </p>
              <br />
              <p className='collapse__text'>
                Инновационное высокоэффективное покрытие MxP и прецизионно
                заточенные стружечные канавки гарантируют плавное удаление
                стружки из отверстия
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

export default Page1;
