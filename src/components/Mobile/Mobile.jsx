import React from 'react';

import './Mobile.scss';
import Strategies from '../Strategies/Strategies';
import Service from '../Service/Service';
import freza from '../../assets/img/freza.jpg';
import turning from '../../assets/img/icon_turning.png';
import cutters from '../../assets/img/icons_mills.png';
import drill from '../../assets/img/icon_drills.png';
import axial from '../../assets/img/icon_thread.png';

function Mobile() {
  return (
    <>
      <section id='mobTopSlide' />

      <section id='strategies' className='strategies'>
        <div className='container'>
          <h2 className='strategyTitle'>Creative ToolS FZCO</h2>
          <Strategies side={true} src={freza} alt='Фреза твердосплавная'>
            <h3>About Us</h3>
            <p>
              Welcome to the world of Creative Tools where we focus our
              conscience and create tools under customized aspects!
            </p>
          </Strategies>
        </div>
      </section>

      <section id='services'>
        <div className='container'>
          <div className='services'>
            <h2 className='servicesTitle'>Product programs</h2>
            <br />
            <Service
              src={turning}
              alt='freza'
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
            <Service src={cutters} alt='freza' to='products/mill/#description'>
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
            <Service src={drill} alt='freza' to='products/drill/#description'>
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
            <Service src={axial} alt='freza' to='products/thread/#description'>
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

      <section id='info' className='info'>
        <div className='container info__container'>
          <h3 className='info__title'>Our philosophy</h3>
          <p className='info__text'>
            At Creative Tools program you can find different instrumental
            solutions, for a wide range of application including also processing
            of any kind steels, stainless steels, heat resistant materials,
            titanium, and exotic materials.
            <br />
            <br /> Our tooling solutions include as standard turning, milling,
            drilling, threading program, and special tools designed under
            special customers’ requirements
          </p>
        </div>
      </section>
    </>
  );
}

export default Mobile;
