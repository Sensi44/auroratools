import React, { useReducer } from 'react';

import { SliderProducts } from '../../SliderProducts';
import turning from '../../../assets/img/turning.png';

import './pages.scss';

const initialCount = {

};

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Page1() {
  return (
    <>
      <article id='turning' className='toolsPage'>
        <h3 className='toolsPage__mainTitle'>Токарный инструмент</h3>

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
          <div className='collapse'>
            <h4 className='collapse__header'>Tritan-Drill-Uni-Plus</h4>
          </div>
        </div>
      </article>
    </>
  );
}

export default Page1;
