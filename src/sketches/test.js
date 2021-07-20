export default (p5) => {
  // These are your typical setup() and draw() methods
  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
  };
  p5.draw = () => {
    p5.clear();
    p5.ellipse(p5.mouseX, p5.mouseY, 40, 40);
  };
};
