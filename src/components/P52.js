import React from "react";
import Sketch from "react-p5";
import Attractor from "./Attractor";
import Mover from "./Mover";
let x = 50;
let y = 50;

let movers = [];

let attractor;

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // // use parent to render the canvas in this ref
    // // (without that p5 will render the canvas outside of your component)
    // p5.createCanvas(500, 500).parent(canvasParentRef);

    p5.createCanvas(640, 360);
    for (let i = 0; i < 10; i++) {
      movers[i] = new Mover(
        p5.random(p5.width),
        p5.random(p5.height),
        p5.random(0.5, 3)
      );
    }
    attractor = new Attractor();
  };

  const draw = (p5) => {
    attractor.display();

    for (let i = 0; i < movers.length; i++) {
      let force = attractor.attract(movers[i]);
      movers[i].applyForce(force);

      movers[i].update();
      movers[i].display();
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};
