class Player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 100;
    this.x = this.game.width * 0.5 - this.width * 0.5;
    this.y = this.game.height - this.height;
    this.speed = 5;
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.x += this.speed;
  }
}

// handle lazers prayer will shooting
class Projecttile {}

// animate space invedor
class Enemy {}

// main class which hold everyting together
class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.keys = []
    this.player = new Player(this);

    // event listeners

    // bascially this fuction saves each keypresse to keys arrays 
    window.addEventListener("keydown", e => {
      // this logic says if key is pressed already and, is in the array, do not add it again
      // indexOf() returns the first index at which the given element can be found in the array
      // it returns -1 if the element isi not present
      if(this.keys.indexOf(e.key) === -1) this.keys.push(e.key)
      console.log(this.keys)
    });
  }
  render(context) {
    // console.log(this.width, this.height)
    this.player.draw(context);
    this.player.update();
  }
}

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  // using the canvas api for writing style to set
  // both element and drawing surface size

  // HTML canvas has 2 sizes, they need to be set value to prevent distortions
  const ctx = canvas.getContext("2d");

  canvas.width = 600;
  canvas.height = 800;

  const game = new Game(canvas);
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.render(ctx);
    requestAnimationFrame(animate);
  }
  animate();
});
