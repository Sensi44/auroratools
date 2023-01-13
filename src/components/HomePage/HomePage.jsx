import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { debounce } from 'lodash';

import Strategies from '../Strategies/Strategies';
import { SliderMain } from '../SliderMain';
import Service from '../Service/Service';
import freza from '../../assets/img/freza.jpg';
import turning from '../../assets/img/turning.png';
import cutters from '../../assets/img/cutters.png';
import drill from '../../assets/img/drill.png';
import axial from '../../assets/img/axial.png';

import './homepage.scss';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const debounceScroll = (a) => {
    if (a < 3) {
      setCurrentSlide((c) => c + 1);
    } else if (a === 3) {
      setCurrentSlide(0);
    }
  };

  useEffect(() => {
    const scrollSlidesCollection = document.querySelectorAll('.scrollSlide');
    const arr = Array.from(scrollSlidesCollection);

    const debounceScroll2 = debounce(() => {
      debounceScroll(currentSlide);
      console.log(currentSlide);
      arr[currentSlide].classList.toggle('test22');
      // arr[currentSlide].scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 50);

    window.addEventListener('scroll', debounceScroll2);

    return () => {
      window.removeEventListener('scroll', debounceScroll2);
    };
  }, [currentSlide]);

  return (
    <>
      <SliderMain />

      <section id='strategies' className='strategies scrollSlide'>
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
      </section>

      <section id='services' className='scrollSlide'>
        <div className='container'>
          <div className='services'>
            <h2 className='servicesTitle'>Наш спектр услуг</h2>
            <br />
            <Service
              src={turning}
              alt='freza'
              to='products/turning/#description'
            >
              <h3>Токарный инструмент</h3>
              <p>
                Полный доступны высокопроизводительный. Эти ключевыые слова
                характеризуют наш широкий ассортимент цельных твердосплавынх
                свёрл практически для любых задач обработки
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
                жизненного цикла говорят в пользу использования наших систем со
                сменными головками. Благодаря эффективным соединяниям они
                достигают уровня производительности цельных твердосплавных свёрл
              </p>
            </Service>
            <Service src={drill} alt='freza' to='products/drill/#description'>
              <h3>Сверлильный инструмент</h3>
              <p>
                Полный доступны высокопроизводительный. Эти ключевыые слова
                характеризуют наш широкий ассортимент цельных твердосплавынх
                свёрл практически для любых задач обработки
              </p>
            </Service>
            <Service src={axial} alt='freza' to='products/axial/#description'>
              <h3>Резьбонарезной инструмент</h3>
              <p>
                Полный доступны высокопроизводительный. Эти ключевыые слова
                характеризуют наш широкий ассортимент цельных твердосплавынх
                свёрл практически для любых задач обработки
              </p>
            </Service>
          </div>
        </div>
      </section>

      <section id='info' className='info scrollSlide'>
        <div className='container info__container'>
          <h3 className='info__title'>Компания АВРОРАТУЛС</h3>
          <p className='info__text'>
            Мы всегда открыты к сотрудничеству и готовы провести презентацию по
            представляемому нами инструменту и оснастке и воозможностям их
            эффективного применения на промышленных предприятиях, осуществить
            проведение тестовых и сравнительных испытаний и т.д.
          </p>
          <p className='info__text'>
            Мы уверены, что можем предложить качетсвенный, современный,
            инновационный и высокопроизводительный инструмент по конкурентным
            ценам.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
