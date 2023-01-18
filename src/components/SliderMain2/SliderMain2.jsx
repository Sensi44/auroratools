import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { debounce } from 'lodash';

import Strategies from '../Strategies/Strategies';
import Service from '../Service/Service';
import freza from '../../assets/img/freza.jpg';
import turning from '../../assets/img/turning.png';
import cutters from '../../assets/img/cutters.png';
import drill from '../../assets/img/drill.png';
import axial from '../../assets/img/axial.png';
import photo1 from '../../assets/img/main_photo-1.jpg';

import './slidermain2.scss';
import './slidermain2-media.scss';

const contentStyle = {
  margin: '0 auto',
  height: 'calc(100vh - 200px)',
  color: '#fff',
  // width: '100%',
  // lineHeight: '160px',
  // textAlign: 'center',
  // background: '#364d79',
};

const wrapStyle = {
  textAlign: 'center',
};

// eslint-disable-next-line react/display-name
const SliderMain2 = React.forwardRef((props, ref) => {
  useEffect(() => {
    const { current } = ref;
    const debounceScroll = debounce((e) => {
      e = e || window.event;

      const delta = e.deltaY || e.detail || e.wheelDelta;
      if (delta > 0) {
        ref.current.next();
      } else {
        ref.current.prev();
      }

      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }, 40);

    window.addEventListener('wheel', debounceScroll);

    return () => {
      window.removeEventListener('wheel', debounceScroll);
    };
  }, [ref]);

  return (
    <>
      <div className='slider main__slider scrollSlide' id='mainSlider'>
        <Carousel
          pauseOnHover={true}
          effect='scrollx'
          draggable
          ref={ref}
          vertical={true}
          verticalSwiping={true}
          infinite={false}
          dots={false}
        >
          <div className='slider__element' style={contentStyle}>
            <section id='topSlide' className='strategies scrollSlide'>
              {/* <img */}
              {/*   src={photo1} */}
              {/*   className='slider__img' */}
              {/*   alt='fff' */}
              {/*   // style={contentStyle} */}
              {/* /> */}
            </section>
          </div>

          <div className='slider__element' style={contentStyle}>
            <section id='strategies' className='strategies scrollSlide'>
              <div className='container slide2__container'>
                <h2 className='strategyTitle'>
                  ИННОВАЦИОННЫЕ ПРОИЗВОДСТВЕННЫЕ СТРАТЕГИИ
                </h2>
                <Strategies side={true} src={freza} alt='Фреза твердосплавная'>
                  <h3>О нас</h3>
                  <p>
                    Металлорежущий инструмент MEGATEC™ создан отечественными
                    Металлорежущий инструмент MEGATEC™ создан отечественными
                  </p>
                </Strategies>
                <Strategies side={false} src={freza} alt='Фреза твердосплавная'>
                  <h3>О нас</h3>
                  <p>
                    Металлорежущий инструмент MEGATEC™ создан отечественными
                    Металлорежущий инструмент MEGATEC™ создан отечественными
                  </p>
                </Strategies>
              </div>
            </section>
          </div>

          <div className='slider__element' style={contentStyle}>
            <section id='services' className='scrollSlide'>
              <div className='container slide3__container'>
                <div className='services'>
                  {/* <h2 className='servicesTitle'>Наш спектр услуг</h2> */}
                  <Service
                    src={turning}
                    alt='freza'
                    to='products/turning/#description'
                  >
                    <h3>Токарный инструмент</h3>
                    <p>
                      Полный доступны высокопроизводительный. Эти ключевыые
                      слова характеризуют наш широкий ассортимент цельных
                      твердосплавынх свёрл практически для любых задач обработки
                    </p>
                  </Service>
                  <Service
                    src={cutters}
                    alt='freza'
                    to='products/cutters/#description'
                  >
                    <h3>Фрезерный инструмент</h3>
                    <p>
                      Рост цен на сырье, оптимизация складов и учёт стоимости
                      жизненного цикла говорят в пользу использования наших
                      систем со сменными головками. Благодаря эффективным
                      соединяниям они достигают уровня производительности
                      цельных твердосплавных свёрл
                    </p>
                  </Service>
                </div>
              </div>
            </section>
          </div>

          <div className='slider__element' style={contentStyle}>
            <section id='services2' className='scrollSlide'>
              <div className='container'>
                <div className='services'>
                  {/* <h2 className='servicesTitle'>Наш спектр услуг</h2> */}
                  <Service
                    src={drill}
                    alt='freza'
                    to='products/drill/#description'
                  >
                    <h3>Сверлильный инструмент</h3>
                    <p>
                      Полный доступны высокопроизводительный. Эти ключевыые
                      слова характеризуют наш широкий ассортимент цельных
                      твердосплавынх свёрл практически для любых задач обработки
                    </p>
                  </Service>
                  <Service
                    src={axial}
                    alt='freza'
                    to='products/axial/#description'
                  >
                    <h3>Резьбонарезной инструмент</h3>
                    <p>
                      Полный доступны высокопроизводительный. Эти ключевыые
                      слова характеризуют наш широкий ассортимент цельных
                      твердосплавынх свёрл практически для любых задач обработки
                    </p>
                  </Service>
                </div>
              </div>
            </section>
          </div>

          <div className='slider__element' style={contentStyle}>
            <section id='info' className='info scrollSlide'>
              <div className='container info__container'>
                <h3 className='info__title'>Компания АВРОРАТУЛС</h3>
                <p className='info__text'>
                  Мы всегда открыты к сотрудничеству и готовы провести
                  презентацию по представляемому нами инструменту и оснастке и
                  воозможностям их эффективного применения на промышленных
                  предприятиях, осуществить проведение тестовых и сравнительных
                  испытаний и т.д.
                </p>
                <p className='info__text'>
                  Мы уверены, что можем предложить качетсвенный, современный,
                  инновационный и высокопроизводительный инструмент по
                  конкурентным ценам.
                </p>
              </div>
            </section>
          </div>
        </Carousel>
      </div>
    </>
  );
});

export default SliderMain2;
