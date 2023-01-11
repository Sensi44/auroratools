import React, { useRef } from 'react';

import { SliderProducts } from '../../SliderProducts';
import turning from '../../../assets/img/turning.png';
import photo from '../../../assets/img/foto.jpg';

function Page4() {
  const ref = useRef();
  const ref2 = useRef();

  const handleClick = (a) => {
    const wrapper = a.current;
    wrapper.classList.toggle('is-wrapper-open');
  };

  return (
    <>
      <article id='turning' className='toolsPage'>
        <h3 className='toolsPage__mainTitle'>Осевой инструмент</h3>

        <div className='toolsPage__topInfo topInfo'>
          <div className='topInfo__left'>
            <p className='topInfo__text'>
              Обширный выбор сплавов и режущих геометрий -
              <br /> от чистового до сверхтяжёлого точения.
            </p>
            <br />
            <p className='topInfo__text'>
              Переход на токарный инструмент MEGATEC быстро опрадывается
              благодаря его экономической эффективности, особенно при обработке
              нержавеющей стали и труднообрабатываемых материалов.
            </p>
            <a href='/e' target='_blank' className='topInfo__downloadButton'>
              Скачать PDF
            </a>
          </div>

          <div className='topInfo__right'>
            <div className='topInfo__slider'>
              <SliderProducts src1={turning} src2={turning} />
            </div>
          </div>
        </div>

        <div className='toolsPage__tools tools'>
          <h3 className='toolsPage__mainTitle toolsPage__addTitle'>
            Наши текущие достижения
          </h3>

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
                src={photo}
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
                src={photo}
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

export default Page4;
