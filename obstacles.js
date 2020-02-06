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
    this.options = [
      {
        name: 'money',
        img: './images/money.png'
      },
      {
        name: 'cigarettes',
        img: './images/marlboro.png'
      },
      {
        name: 'love',
        img: './images/love.png'
      },
      {
        name: 'water',
        img: './images/water.png'
      },
      {
        name: 'alba',
        img: './images/alba.png'
      },
      {
        name: 'beer',
        img: './images/beer.png'
      }
    ];
    this.setRandomObject();
  }
  paint() {
    const imageURL = this.img;
    const image = new Image();
    image.src = imageURL;
    this.game.context.drawImage(image, this.x, this.y, this.width, this.height);
  }
  setRandomPosition() {
    this.x = 176 + Math.random() * 456;
  }

  setRandomObject() {
    let n = Math.floor(Math.random() * 6);
    this.name = this.options[n].name;
    this.img = this.options[n].img;
  }

  runLogic() {
    this.y += 5;
  }
}
