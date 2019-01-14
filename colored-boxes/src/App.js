import React, { Component } from 'react';
import './App.css';
import AllColors from './allColors';

const NumBoxes = 128;

const Box = ({ color }) => {
  const style = {
    backgroundColor: color
  };
  return (
    <div>
      <div className='box' style={style} />
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    const boxes = Array(NumBoxes)
      .fill()
      .map(this.getRandColor, this);
    this.state = { boxes };

    setInterval(() => {
      const boxes = this.state.boxes.slice();
      const randIndex = Math.floor(Math.random() * boxes.length);
      boxes[randIndex] = this.getRandColor();
      this.setState({ boxes });
    }, 200);
  }

  getRandColor() {
    return AllColors[Math.floor(Math.random() * AllColors.length)];
  }
  render() {
    const boxes = this.state.boxes.map((color, index) => (
      <Box key={index} color={color} />
    ));
    return <div className='App'>{boxes}</div>;
  }
}

export default App;
