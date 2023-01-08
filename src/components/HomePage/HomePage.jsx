import React from 'react';

import { Strategies } from '../Strategies';
import { SliderMain } from '../SliderMain';
import freza from '../../assets/img/freza.jpg';

import './homepage.scss';

const HomePage = () => {
  return (
    <>
      <SliderMain />

      <div className='strategies'>
        <div className='container'>
          <h2 className='strategyTitle'>
            ИННОВАЦИОННЫЕ ПРОИЗВОДСТВЕННЫЕ СТРАТЕГИИ
          </h2>

          <Strategies side={true} src={freza} alt='Фреза твердосплавная'>
            <h3>О нас</h3>
            <p>
              Металлорежущий инструмент MEGATEC™ создан отечественными
              Металлорежущий инструмент MEGATEC™ создан отечественными
              Металлорежущий инструмент MEGATEC™ создан отечественными
              Металлорежущий инструмент MEGATEC™ создан отечественными
            </p>
            {/* <img src={freza} alt='Фреза тестовая' /> */}
          </Strategies>
          <Strategies side={false} src={freza} alt='Фреза твердосплавная'>
            <h3>О нас</h3>
            <p>
              Металлорежущий инструмент MEGATEC™ создан отечественными
              Металлорежущий инструмент MEGATEC™ создан отечественными
              Металлорежущий инструмент MEGATEC™ создан отечественными
              Металлорежущий инструмент MEGATEC™ создан отечественными
            </p>
          </Strategies>
          <Strategies side={true} src={freza} alt='Фреза твердосплавная'>
            <h3>О нас</h3>
            <p>
              Металлорежущий инструмент MEGATEC™ создан отечественными
              Металлорежущий инструмент MEGATEC™ создан отечественными
              Металлорежущий инструмент MEGATEC™ создан отечественными
              Металлорежущий инструмент MEGATEC™ создан отечественными
            </p>
          </Strategies>
        </div>
      </div>

      <p>домашняя</p>
      <p>aa</p>
      <p>bb</p>
      <p>cc</p>
      <p>HomePage</p>
      <p>aa</p>
      <p>bb</p>
      <p>cc</p>
    </>
  );
};

export default HomePage;
