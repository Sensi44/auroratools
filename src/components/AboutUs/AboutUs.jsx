import React from 'react';

import about from '../../assets/img/about.jpg';

import './aboutus.scss';

function AboutUs() {
  return (
    <>
      <section id='about' className='about'>
        {/* <div className='about__img' /> */}
        <div className='container about__container'>
          <h2 className='about_title'>
            Эффективный, Экспертный, Инновационный
          </h2>
          <p className='about_text'>
            С 2018 года ООО «АВРОРАТУЛС» представляет широкую линейку
            металлорежущего инструмента MEGATEC™. Инструмент разрабатывается
            специалистами ООО «АВРОРАТУЛС» совместно с зарубежными R&D центрами
            и изготавливается на ведущих промышленных предприятиях Германии,
            Австрии, Италии и прочих стран. <br /> ООО «АВРОРАТУЛС» является
            правообладателям товарного знака MEGATEC™
          </p>
          <p className='about_text'>
            Инструмент MEGATEC™ успешно применяется на ведущих промышленных
            предприятиях как в Российской Федерации и странах Таможенного союза
            (Беларусь, Казахстан), так и в странах Европы и Персидского залива.
          </p>

          <article className='recomendations'>
            <div>
              <h3 className='recomendations__title'>Ценности и рекомендации</h3>
              <p className='recomendations__text'>
                В нашей повседневной работе мы руководствуемся стремлением найти
                оптимальное инструментальное решение для наших клиентов. С этой
                целью мы приспосабливаемся к нашим клиентам, стараемся понять их
                и вместе работаем над поиском идеального решения
              </p>
              <p className='recomendations__text'>
                Наши действия основаны на ценностях и руководящих принципах, как
                в сторудничестве с вами, так и между нами.
              </p>
            </div>
            <div>
              <img src={about} alt='about-us' />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
