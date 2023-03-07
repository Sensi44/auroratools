import React, { useRef } from 'react';

import { SliderProducts } from '../../SliderProducts';
import drills1 from '../../../assets/img/drills-1.jpg';
import drills2 from '../../../assets/img/drills-2.jpg';
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
              Creative Tools indexable insert drilling program counts 2D, 3D, 4D
              working drill length. The program designed for different machining
              material application like steels, stainless steels, cast iron, and
              also materials which difficult to machine.
            </p>
            <br />
            <p className='topInfo__text'>
              The program starts from the diameter 14 mm and finishes at the
              diameter 50 mm Multi purposes drilling boring indexable tools. The
              mentioned multi purposes tools are designed to combine the
              drilling and boring application together in one tool.
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
          <p className='toolsPage__mainTitle toolsPage__addTitle'>
            • Solid carbide drill program with 3D, 5D, 8D working length. (The
            drills with length 5D and 8D, are with internal coolant supply
            channels).
            <br /> • The solid carbide drill program starts from the diameter 1
            mm and finishes at the diameter 20 mm.
            <br /> • Different machining materials can be successfully processed
            by Creative Tools solid carbide drill program.
          </p>

          <h3 className='toolsPage__mainTitle toolsPage__addTitle'>Drills</h3>

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
                src={drills1}
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
                src={drills2}
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

          <h3 className='toolsPage__mainTitle toolsPage__addTitle'>
            Indexable drills
          </h3>

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
                src={drills3}
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

export default Page3;
