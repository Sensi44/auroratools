import React, { useRef } from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types';

import './sliderproducts.scss';

function SliderProducts({ arr }) {
  const ref = useRef();

  const slides = arr.map((item, index) => {
    return (
      <div className='prodSlider__elem' key={index}>
        <img src={item} alt='asd' />
      </div>
    );
  });

  return (
    <div className='prodSlider'>
      <Carousel
        pauseOnHover={true}
        effect='scrollx'
        draggable
        ref={ref}
        autoplay={true}
      >
        {slides}
      </Carousel>
    </div>
  );
}

SliderProducts.propTypes = {
  arr: PropTypes.array,
};

export default SliderProducts;
