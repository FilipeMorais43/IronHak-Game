class Character {
  constructor(game) {
    this.game = game;
    this.x = 360;
    this.y = 620;
    this.width = 90;
    this.height = 160;
    this.score = 0;
    this.setKeyboardEventListeners();
    this.imageCharacter = new Image();
    this.imageCharacter.src = './images/character.png';
    this.speed = 0;
  }

  moveLeft() {
    this.speed = -3;
  }

  moveRight() {
    this.speed = 3;
  }

  updateMove() {
    if (this.x > 120 && this.x < 590) {
      this.x += this.speed;
    } else {
      this.speed = 0;
    }
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
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37:
          this.moveLeft();
          this.x += this.speed;
          break;
        case 39:
          this.moveRight();
          this.x += this.speed;
          break;
      }
    });
  }
}
