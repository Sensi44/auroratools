import React, { useRef } from 'react';
import { Carousel } from 'antd';

import dot from '../../assets/img/dot.png';
import photo1 from '../../assets/img/main_photo-1.jpg';

import './slidermain.scss';

const contentStyle = {
  margin: 0,
  height: '700px',
  color: '#fff',
  width: '100%',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

// const settings = {
//   customPaging() {
//     return (
//       // eslint-disable-next-line jsx-a11y/anchor-is-valid
//       <a>
//         {/* eslint-disable-next-line jsx-a11y/alt-text */}
//         <img src={dot} alt='dot' />
//       </a>
//     );
//   },
//   dots: true,
//   dotsClass: 'slick-dots slick-thumb',
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

function SliderMain() {
  const ref = useRef();
  // Хороший вариант взять из AntD как и раскрывающиеся меню
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <div className='slider main__slider'>
        <Carousel
          afterChange={onChange}
          pauseOnHover={true}
          effect='scrollx'
          draggable
          ref={ref}
        >
          <div>
            {/* <h3 className='slider__element' style={contentStyle}> */}
            {/*   1 */}
            {/* </h3> */}
            <img src={photo1} alt='fff' style={contentStyle} />
          </div>
          <div>
            <h3 className='slider__element' style={contentStyle}>
              2
            </h3>
          </div>
          <div>
            <h3 className='slider__element' style={contentStyle}>
              3
            </h3>
          </div>
          <div>
            <h3 className='slider__element' style={contentStyle}>
              4
            </h3>
          </div>
          <div>
            <h3 className='slider__element' style={contentStyle}>
              5
            </h3>
          </div>
        </Carousel>
        <button className='slider__prev' onClick={() => ref.current.prev()}>
          prev
        </button>
        <button className='slider__next' onClick={() => ref.current.next()}>
          next
        </button>
      </div>
    </>
  );
}

export default SliderMain;
