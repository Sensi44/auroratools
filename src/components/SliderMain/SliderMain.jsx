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

import './slidermain.scss';

const SliderMain = React.forwardRef((props, ref) => {
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
                <h2 className='strategyTitle'>Creative ToolS FZCO</h2>
                <Strategies side={true} src={freza} alt='Фреза твердосплавная'>
                  <h3>About Us</h3>
                  <p>
                    Welcome to the world of Creative Tools where we focus our
                    conscience and create tools under customized aspects! There
                    are many good tools in the world, and sometimes it is
                    difficult to make a right choice in a favor of one tool or
                    another. Numerous manufactures create outstanding tool
                    masterpieces, however, they themselves have limited
                    understanding about the real work possibilities of their
                    instruments. You can learn a lot of information on cutting
                    tools, their capabilities and applications, but it might
                    still not be enough when it comes to one of your personal
                    cases. Proper tool application requires certain skills,
                    careful attention to the many aspects such as: correct tool
                    clamping, right tool positioning in the machine axes,
                    effective instrument trajectory, and correct cutting regimes
                    If you do not take into account all factors, all tools will
                    work the same unsatisfactorily. Our specialization is an
                    exact and proper application of the mentioned cutting tools
                    at the customer’s production facilities. The best tool for
                    the client is his personal tool, created directly for the
                    solution of his own problem. Creative Tools We create tools.
                  </p>
                </Strategies>
              </div>
            </section>
          </div>

          <div>
            <section id='services' className='scrollSlide'>
              <div className='container slide3__container'>
                <div className='services'>
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
                <h3 className='info__title'>Our philosophy</h3>
                <p className='info__text'>
                  At Creative Tools program you can find different instrumental
                  solutions, for a wide range of application including also
                  processing of any kind steels, stainless steels, heat
                  resistant materials, titanium, and exotic materials.
                  <br />
                  <br /> Our tooling solutions include as standard turning,
                  milling, drilling, threading program, and special tools
                  designed under special customers’ requirements
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

SliderMain.displayName = 'SliderMain';

export default SliderMain;
