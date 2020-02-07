const imageMoney = new Image();
imageMoney.src = './images/money.png';

const imageMarlboro = new Image();
imageMarlboro.src = './images/marlboro.png';

const imageLove = new Image();
imageLove.src = './images/love.png';

const imageWater = new Image();
imageWater.src = './images/water.png';

const imageAlba = new Image();
imageAlba.src = './images/alba.png';

const imageBeer = new Image();
imageBeer.src = './images/beer.png';

class Obstacles {
  constructor(game) {
    this.game = game;
    this.name = '';
    this.img = '';
    this.x = 0;
    this.y = 0;
    this.width = 40;
    this.height = 40;
    this.setRandomPosition();
    this.options = {
      money: imageMoney,
      marlboro: imageMarlboro,
      love: imageLove,
      water: imageWater,
      alba: imageAlba,
      beer: imageBeer
    };
    this.setRandomObject();
  }

  paint() {
    const image = this.options[this.name];
    this.game.context.drawImage(image, this.x, this.y, this.width, this.height);
  }

  setRandomPosition() {
    this.x = 176 + Math.random() * 456;
  }

  setRandomObject() {
    let n = Math.floor(Math.random() * 6);
    const optionNames = Object.keys(this.options);
    this.name = optionNames[n];
  }

  runLogic() {
    this.y += 5;
  }
}
