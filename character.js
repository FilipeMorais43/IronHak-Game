class Character {
  constructor(game) {
    this.game = game;
    this.x = 450;
    this.y = 800;
    this.width = 80;
    this.height = 200;
    this.score = 0;
    this.setKeyboardEventListeners();
  }

  moveLeft(left) {
    this.x -= 25;
  }

  moveRight(right) {
    this.x += 25;
  }

  score() {
    this.score += 1;
  }
  paint() {
    const imageCharacter = './images/character.png';
    const image = new Image();
    image.src = imageCharacter;

    image.addEventListener('load', () => {
      this.game.context.drawImage(image, this.x, this.y, this.width, this.height);
    });
    this.game.context.drawImage(image, this.x, this.y, this.width, this.height);
  }
  setKeyboardEventListeners() {
    window.addEventListener('keyup', event => {
      switch (event.keyCode) {
        case 37:
          if (this.x > 150) {
            this.moveLeft();
          }
          break;
        case 39:
          if (this.x < 755) {
            this.moveRight();
          }
          break;
      }
    });
  }
  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37:
          if (this.x > 150) {
            this.moveLeft();
          }
          break;
        case 39:
          if (this.x < 755) {
            this.moveRight();
          }
          break;
      }
    });
  }
}
