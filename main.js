const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

document.getElementById('start-button').onclick = function() {
  game.startGame();
};

document.getElementById('reset').onclick = function() {
  game.reset();
};
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
