class Girlfriend {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 600;
    this.width = 120;
    this.height = 130;
    this.looking = true;
  }
  paint() {
    const image = new Image();
    if (this.looking) {
      const imageGirlLook = './images/girllook.jpeg';
      image.src = imageGirlLook;
      this.game.context.drawImage(image, this.x, this.y, this.width, this.height);
    } else {
      const imageGirlNoLook = './images/girlnolook.jpeg';
      image.src = imageGirlNoLook;
      this.game.context.drawImage(image, this.x, this.y, this.width, this.height);
    }
  }
}
