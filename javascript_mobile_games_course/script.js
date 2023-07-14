const canvas = document.getElementById('canvas1');
// References the HTML element 'canvas1', which is a <canvas> element,
// which allows you to draw graphics on a web page - acts like a container.
// The js is what actually draws the graphics.


const ctx = canvas.getContext('2d');
// Connects canvas1 to the variable ctx and adds on context of '2d' - which
// sets the context to CanvasRenderingContext2D -- defines type of rendering

console.log(ctx);

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;

const playerImage = new Image();
playerImage.src = 'assets/shadow_dog.png'

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  //ctx.drawImage(
  // image, = source image
  // sx, = where to begin reading from source on the x axis (width)
  // sy, = where to begin reading from source on the y axis (height)
  // sw, = set the width for the area you are reading from source
  // sh, = set the height for the area you are reading from source
  // dx, = where to begin writing on the canvas on the x axis (width)
  // dy, = where to begin writing on the canvas on the y axis (height)
  // dw, = set the width for the output drawing
  // dh = set the height for the output drawing
  // )
  // Above statement shows all the possible arguments of this javascript
  // function - which allows you to select a particular area of an image
  // (s = source) and display in a certain area of the canvas
  // (d = destination)

  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight);

    if (frameX < 6) frameX ++;
    else frameX = 0;
  requestAnimationFrame(animate);
};

animate();
