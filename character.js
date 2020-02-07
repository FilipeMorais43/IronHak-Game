class Character {
  constructor(game) {
    this.game = game;
    this.x = 360;
    this.y = 620;
    this.width = 80;
    this.height = 180;
    this.score = 0;
    this.setKeyboardEventListeners();
    this.imageCharacter = new Image();
    this.imageCharacter.src = './images/character.png';
  }

  moveLeft(left) {
    this.x -= 22;
  }

  moveRight(right) {
    this.x += 22;
  }

  score() {
    this.score += 1;
  }
  paint() {
    this.imageCharacter.addEventListener('load', () => {
      this.game.context.drawImage(this.imageCharacter, this.x, this.y, this.width, this.height);
    });
    this.game.context.drawImage(this.imageCharacter, this.x, this.y, this.width, this.height);
  }
  setKeyboardEventListeners() {
    window.addEventListener('keyup', event => {
      switch (event.keyCode) {
        case 37:
          if (this.x > 120) {
            this.moveLeft();
          }
          break;
        case 39:
          if (this.x < 604) {
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
          if (this.x > 120) {
            this.moveLeft();
          }
          break;
        case 39:
          if (this.x < 590) {
            this.moveRight();
          }
          break;
      }
    });
  }
}
