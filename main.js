const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

document.getElementById('start-button').onclick = function() {
  game.reset();
  game.startGame();
  document.getElementById('start-button').classList.add('hidden');
  document.getElementById('reset').classList.remove('hidden');
};

document.getElementById('reset').onclick = function() {
  game.reset();
};
