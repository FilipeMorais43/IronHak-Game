class Nutricionist {
  constructor(game) {
    this.game = game;
    this.x = 680;
    this.y = 600;
    this.width = 130;
    this.height = 130;
    this.looking = true;

    this.imageNutriLook = new Image();
    this.imageNutriLook.src = './images/nutrilook.jpg';

    this.imageNutriNoLook = new Image();
    this.imageNutriNoLook.src = './images/nutrinolook.jpg';
  }
  paint() {
    if (this.looking) {
      this.game.context.drawImage(this.imageNutriLook, this.x, this.y, this.width, this.height);
    } else {
      this.game.context.drawImage(this.imageNutriNoLook, this.x, this.y, this.width, this.height);
    }
  }
}
