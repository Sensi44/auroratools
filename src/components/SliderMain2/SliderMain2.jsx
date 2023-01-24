import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { debounce } from 'lodash';

import Strategies from '../Strategies/Strategies';
import Service from '../Service/Service';
import { Mobile } from '../Mobile';
import freza from '../../assets/img/freza.jpg';
import turning from '../../assets/img/icon_turning.png';
import cutters from '../../assets/img/icons_mills.png';
import drill from '../../assets/img/icon_drills.png';
import thread from '../../assets/img/icon_thread.png';
// import main1 from '../../assets/img/main-1.jpg';
// import main2 from '../../assets/img/main-2.jpg';
import main3 from '../../assets/img/main-3.jpg';

import './slidermain2.scss';

const contentStyle = {
  margin: '0 auto',
  height: 'calc(100vh - 200px)',
  color: '#fff',
  // width: '100%',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#FFFFFF',
};

const wrapStyle = {
  textAlign: 'center',
};

// eslint-disable-next-line react/display-name
const SliderMain2 = React.forwardRef((props, ref) => {
  // const [slide, setSlide] = useState(0);
  // const addRef = React.createRef();
  useEffect(() => {
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

  // let res;
  // useEffect(() => {
  //   const changeBackground = () => {
  //     if (slide < 2) {
  //       setSlide(slide + 1);
  //     } else {
  //       setSlide(0);
  //     }
  //     if (slide === 0) res = main1;
  //     if (slide === 1) res = main2;
  //     if (slide === 2) res = main3;
  //     addRef.current.style = `background-image: url(${res})`;
  //     addRef.current.classList.toggle('ok');
  //     console.log(slide);
  //   };
  //   const timer = setInterval(changeBackground, 2000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [slide]);

  return (
    <>
      <div className='slider main__slider' id='mainSlider'>
        <Carousel
          pauseOnHover={true}
          autoplay={false}
          effect='scrollx'
          ref={ref}
          draggable={true}
          infinite={false}
          verticalSwiping={true}
          vertical={true}
          dots={false}
        >
          <div>
            <section id='topSlide' className='strategies scrollSlide' />
          </div>

          <div>
            <section id='strategies' className='strategies scrollSlide'>
              <div className='container slide2__container'>
                <h2 className='strategyTitle'>
                  Инновационные производственные стратегии
                </h2>
                <Strategies side={true} src={freza} alt='Фреза твердосплавная'>
                  <h3>О нас</h3>
                  <p>
                    Металлорежущий инструмент MEGATEC™ создан отечественными
                    Металлорежущий инструмент MEGATEC™ создан отечественными
                  </p>
                </Strategies>
                {/* <Strategies side={false} src={freza} alt='Фреза твердосплавная'> */}
                {/*   <h3>О нас</h3> */}
                {/*   <p> */}
                {/*     Металлорежущий инструмент MEGATEC™ создан отечественными */}
                {/*     Металлорежущий инструмент MEGATEC™ создан отечественными */}
                {/*   </p> */}
                {/* </Strategies> */}
              </div>
            </section>
          </div>

          <div>
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
                    to='products/mill/#description'
                  >
                    <h3>Фрезерный инструмент</h3>
                    <p>
                      Рост цен на сырье, оптимизация складов и учёт стоимости
                      жизненного цикла говорят в пользу использования наших
                      систем со сменными головками.
                    </p>
                  </Service>
                </div>
              </div>
            </section>
          </div>

          <div>
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
                    src={thread}
                    alt='freza'
                    to='products/thread/#description'
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

          <div>
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
      <div className='mobilePage'>
        <Mobile />
      </div>
    </>
  );
});

export default SliderMain2;
