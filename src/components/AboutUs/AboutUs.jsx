import React from 'react';

import './aboutus.scss';

function AboutUs() {
  return (
    <>
      <section id='about' className='about'>
        <div className='container about__container'>
          <h2 className='about_title'>Innovative, Prospective, Reliable</h2>
          <p className='about_text'>
            There are many good tools in the world, and sometimes it is
            difficult to make a right choice in a favor of one tool or another.
            <br />
            Numerous manufactures create outstanding tool masterpieces, however,
            they themselves have limited understanding about the real work
            possibilities of their instruments.
            <br />
            You can learn a lot of information on cutting tools, their
            capabilities and applications, but it might still not be enough when
            it comes to one of your personal cases.
            <br /> Proper tool application requires certain skills, careful
            attention to the many aspects such as: correct tool clamping, right
            tool positioning in the machine axes, effective instrument
            trajectory, and correct cutting regimes.
            <br /> Our specialization is an exact and proper application of the
            mentioned cutting tools at the customer’s production facilities.
            <br /> The best tool for the client is his personal tool, created
            directly for the solution of his own problem.
            <br /> Welcome to Creative Tools, we create tools.
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
                в сотрудничестве с вами, так и между нами.
              </p>
            </div>
            <div className='recomendations__img' />
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
