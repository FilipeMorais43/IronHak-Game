class BadIconGirlfriend {
  constructor(game) {
    this.game = game;
    this.x = positionx;
    this.y = positiony;
    this.width = 30;
    this.height = 30;
    this.setRandomPosition();
  }
  paint() {
    const imageAlba = './images/alba.png';
    const image = new Image();
    image.src = imageAlba;
    context.drawImage(image, this.x, this.y, this.width, this.height);
  }
  setRandomPosition() {
    this.positionX = 210 + Math.random() * 580;
  }
  runLogic() {
    this.y += 3;
  }
}
