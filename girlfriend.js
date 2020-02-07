class Girlfriend {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 600;
    this.width = 120;
    this.height = 130;
    this.looking = true;

    this.imageGirlLook = new Image();
    this.imageGirlLook.src = './images/girllook.jpeg';

    this.imageGirlNoLook = new Image();
    this.imageGirlNoLook.src = './images/girlnolook.jpeg';
  }
  paint() {
    if (this.looking) {
      this.game.context.drawImage(this.imageGirlLook, this.x, this.y, this.width, this.height);
    } else {
      this.game.context.drawImage(this.imageGirlNoLook, this.x, this.y, this.width, this.height);
    }
  }
}
