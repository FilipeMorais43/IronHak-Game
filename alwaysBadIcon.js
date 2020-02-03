class AlwaysBadIcon {
  constructor(game) {
    this.game = game;
    this.x = positionx;
    this.y = positiony;
    this.width = 40;
    this.height = 40;
    this.setRandomPosition();
  }
  paint() {
    const imageMarlboro = './images/marlboro.jpg';
    const image = new Image();
    image.src = imageMarlboro;
    context.drawImage(image, this.x, this.y, this.width, this.height);
  }
  setRandomPosition() {
    this.positionX = 220 + Math.random() * 570;
  }
  runLogic() {
    this.y += 3;
  }
}
