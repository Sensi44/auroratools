import React, { useRef } from 'react';
import { Carousel } from 'antd';

import './sliderproducts.scss';

function SliderProducts({ src1, src2 }) {
  const ref = useRef();

  // todo Добавить возможность передачи через пропсы массива изображений, и тут их мапить в элементы
  return (
    <div className='prodSlider'>
      <Carousel
        pauseOnHover={true}
        effect='scrollx'
        draggable
        ref={ref}
        autoplay={true}
      >
        <div className='prodSlider__elem'>
          <img src={src1} alt='asd' />
        </div>
        <div className='prodSlider__elem'>
          <img src={src2} alt='asd' />
        </div>
      </Carousel>
    </div>
  );
}

export default SliderProducts;
