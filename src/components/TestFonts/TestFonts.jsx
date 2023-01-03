import React from 'react';

const TestFonts = (props) => {
  console.log(props);
  return (
    <div className={props.className}>
      <span>Тест шрифтов</span>
      <br />
      <br />
      <div className='extra'>Montserrat-extrabold</div>
      <div className='semi'>Montserrat-semibold</div>
      <div className='open-light'>open-light</div>
      <div className='open-regular'>open-regular</div>
      <div className='roboto'>roboto</div>
    </div>
  );
};

export { TestFonts };
