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
            <br /> The best tool for the client is His Personal Tool, created
            directly for the solution of his own problem.
            <br /> Welcome to Creative Tools, we create tools!
          </p>

          <article className='recomendations'>
            <div>
              <h3 className='recomendations__title'>
                Customer trust is our pride and value
              </h3>
              <p className='recomendations__text'>
                In our daily work, we are guided to find the optimal tool
                solution for our customers. The process requires a deep work
                cooperation with our clients. And it is a honor and proud for us
                to assist our customers for their optimal tool solutions.
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
