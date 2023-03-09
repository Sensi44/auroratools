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
                <Strategies side={true} src={freza} alt='Carbide cutter'>
                  <h3>About Us</h3>
                  <p>
                    Welcome to the world of Creative Tools where we focus our
                    conscience and create tools under customized aspects!
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
                    alt='mill'
                    to='products/turning/#description'
                  >
                    <h3>Turning program</h3>
                    <p>
                      Effective
                      <br />
                      Reliable
                      <br />
                      Safe
                      <br />
                    </p>
                  </Service>
                  <Service
                    src={cutters}
                    alt='mill'
                    to='products/mill/#description'
                  >
                    <h3>Milling program</h3>
                    <p>
                      Stable
                      <br />
                      High-performance
                      <br />
                      Economical
                      <br />
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
                    alt='mill'
                    to='products/drill/#description'
                  >
                    <h3>Drilling program</h3>
                    <p>
                      Universal
                      <br />
                      Multifunctional
                      <br />
                      Easy applicable
                      <br />
                    </p>
                  </Service>
                  <Service
                    src={thread}
                    alt='mill'
                    to='products/thread/#description'
                  >
                    <h3>Threading program</h3>
                    <p>
                      Exact accuracy
                      <br />
                      Repeatable
                      <br />
                      Productive
                      <br />
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
