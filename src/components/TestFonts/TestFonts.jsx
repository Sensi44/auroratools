import React from 'react';

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
  }

  static getDerivedStateFromProps(props, state) {
    // console.log('getDerivedStateFromProps');
    return { color: props.favcol };
  }

  render() {
    // console.log('rend');
    return <h1>Мой любимый цвет - {this.state.color}</h1>;
  }
}

const TestFonts = (props) => {
  // console.log(props);
  return (
    <div className={props.className}>
      <span>Тест шрифтов</span>
      <Color favcol='yellow' />
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
