import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./Sketch";

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
      position: [
        150,
        150,
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
      ],
    };
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor() {
    this.setState({
      color: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
      position: [
        150,
        150,
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
      ],
    });
    console.log(this.state.position);
  }

  render() {
    return (
      <div>
        <button onClick={this.randomColor}>Random Color</button>
        <P5Wrapper
          sketch={sketch}
          color={this.state.color}
          position={this.state.position}
        ></P5Wrapper>
      </div>
    );
  }
}

export default App;
