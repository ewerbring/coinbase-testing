export default function sketch(p) {
  let position = (0, 0, 0, 0);

  let canvas;

  p.setup = () => {
    canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    p.noStroke();
  };

  p.draw = () => {
    p.background("white");
    p.ellipse(p.mouseX, p.mouseY, position[2], position[3]);
    p.rect(30, p.mouseY, p.mouseX, 20);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    if (canvas)
      //Make sure the canvas has been created
      p.fill(newProps.color);

    position = newProps.position;
  };
}
