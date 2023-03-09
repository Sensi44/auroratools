import React, { useRef } from 'react';

import { SliderProducts } from '../../SliderProducts';
import drills1 from '../../../assets/img/drills-1.jpg';
import drills11 from '../../../assets/img/drills1.jpg';
import drills2 from '../../../assets/img/drills3.jpg';
import drills3 from '../../../assets/img/drills-3.jpg';
import drillSlide1 from '../../../assets/img/drill-slide-1.jpg';
import drillSlide2 from '../../../assets/img/drill-slide-2.jpg';
import drillSlide3 from '../../../assets/img/drill-slide-3.jpg';

function Page3() {
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const handleClick = (a) => {
    const wrapper = a.current;
    wrapper.classList.toggle('is-wrapper-open');
  };

  return (
    <>
      <article id='Drills' className='toolsPage'>
        <h3 className='toolsPage__mainTitle'>Drilling Tools</h3>

        <div className='toolsPage__topInfo topInfo'>
          <div className='topInfo__left'>
            <p className='topInfo__text'>
              Indexable Drilling program counts numerous working drill lengths
              like 2D, 3D, 4D.
            </p>
            <br />
            <p className='topInfo__text'>
              The program designed for different machining material application
              like steels, stainless steels, cast iron, and aluminum alloys.
            </p>
            <a href='/e' target='_blank' className='topInfo__downloadButton'>
              Download PDF
            </a>
          </div>

          <div className='topInfo__right'>
            <div className='topInfo__slider'>
              <SliderProducts arr={[drillSlide1, drillSlide2, drillSlide3]} />
            </div>
          </div>
        </div>

        <div className='toolsPage__tools tools'>
          {/* <p className='toolsPage__mainTitle toolsPage__addTitle'>• Solid</p> */}

          <h3 className='toolsPage__mainTitle toolsPage__addTitle'>
            Drilling program
          </h3>

          <div ref={ref} className='tools__collapse collapse'>
            <button
              className='collapse__header'
              type='menu-fold'
              onClick={() => handleClick(ref)}
            >
              Indexible drilling program
            </button>
            <div className='collapse_body'>
              <h4 className='collapse__title'>
                Надёжное удаление стружки благодаря более короткой стружке
              </h4>
              <img
                className='collapse__img'
                src={drills11}
                alt='Фото инструмента'
              />
              <p className='collapse__text'>
                Existing drill diameter range starts from 14 to 50 mm
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
              Multi purposes drilling boring tools
            </button>
            <div className='collapse_body'>
              <h4 className='collapse__title'>
                Надёжное удаление стружки благодаря более короткой стружке
              </h4>
              <img
                className='collapse__img'
                src={drills3}
                alt='Фото инструмента'
              />
              <p className='collapse__text'>
                Multi purposes drilling boring tools
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
              Solid carbide drills
            </button>
            <div className='collapse_body'>
              <h4 className='collapse__title'>
                Надёжное удаление стружки благодаря более короткой стружке
              </h4>
              <img
                className='collapse__img'
                src={drills2}
                alt='Фото инструмента'
              />
              <p className='collapse__text'>Special drills</p>
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

export default Page3;
