class BadIconNutricionist {
  constructor(game) {
    this.game = game;
    this.x = positionx;
    this.y = positiony;
    this.width = 30;
    this.height = 30;
    this.randomPosition();
  }
  paint() {
    const imageBeer = './images/beer.jpg';
    const image = new Image();
    image.src = imageBeer;
    context.drawImage(imageTrump, this.x, this.y, this.width, this.height);
  }
  setRandomPosition() {
    this.positionX = 210 + Math.random() * 580;
  }
  runLogic() {
    this.y += 3;
  }
}