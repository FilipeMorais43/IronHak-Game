class Nutricionist {
  constructor(game) {
    this.game = game;
    this.x = 680;
    this.y = 600;
    this.width = 130;
    this.height = 130;
    this.looking = true;
  }
  paint() {
    const image = new Image();
    if (this.looking) {
      const imageNutriLook = './images/nutrilook.jpg';
      image.src = imageNutriLook;
      this.game.context.drawImage(image, this.x, this.y, this.width, this.height);
    } else {
      const imageNutriNoLook = './images/nutrinolook.jpg';
      image.src = imageNutriNoLook;
      this.game.context.drawImage(image, this.x, this.y, this.width, this.height);
    }
  }
}
