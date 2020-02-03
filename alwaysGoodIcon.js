class AlwaysGoodIcon {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.width = 40;
    this.height = 40;
    this.setRandomPosition();
  }
  paint() {
    const imageMoney = './images/money.png';
    const image = new Image();
    image.src = imageMoney;
    this.game.context.drawImage(image, this.x, this.y, this.width, this.height);
  }

  setRandomPosition() {
    this.x = 220 + Math.random() * 570;
  }
  runLogic() {
    this.y += 3;
  }
}
