import React, { Component } from "react";
// import * as p5 from "react-p5";
import p5 from "react-p5-wrapper";

export default class Attractor extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.position = createVector(width / 2, height / 2);
  //   }
  attract() {
    console.log("helloattract");
  }
  update() {
    console.log("helloupdate");
  }
  display() {
    console.log("hellodisplay");
  }
  render() {
    return <div>attr</div>;
  }
}
