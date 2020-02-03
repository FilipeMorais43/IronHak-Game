class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.obstaclesSource = ['./images/girllook.jpeg', './images/money.png'];
    this.obstacles = [];
    this.gameIsRunning = true;
    this.$scoreNode = document.getElementById('score');
    this.alwaysGoodIcon = [];
    this.character = new Character(this);
    this.girlfriend = new Girlfriend(this);
    this.nutricionist = new Nutricionist(this);
    this.time = 0;
    this.girlfriendTimer = 0;
    this.nutricionistTimer = 0;
    this.speed = 1000 + Math.random() * 3000;
    this.girlfriendSpeed = 5000 + Math.random() * 4000;
    this.nutricionistSpeed = 5000 + Math.random() * 4000;
    this.loop();
  }
  createObstacles() {
    //iterate through this.obstaclesSource and create new obstalce
    //randomly create a new obstacle from any of 6 classes
    //const obstacle = randomly select one class
    this.obstacles = [...this.obstacles, obstacle];
  }

  paintWhiteRectangles = () => {
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 745, 155, 160);
    this.context.fillStyle = 'black';
    this.context.fillRect(845, 745, 155, 160);
    this.context.stroke();
  };

  draweverything() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.paintWhiteRectangles();
    this.character.paint();
    this.girlfriend.paint();
    this.nutricionist.paint();
    for (let i = 0; i < this.alwaysGoodIcon.length; i++) {
      this.alwaysGoodIcon[i].paint();
    }
  }

  loop = timestamp => {
    window.requestAnimationFrame(timestamp => {
      if (this.gameIsRunning) {
        this.loop(timestamp);
      }
    });

    if (this.time < timestamp - this.speed) {
      this.time = timestamp;
      const alwaysGoodIcon = new AlwaysGoodIcon(this);
      this.alwaysGoodIcon = [...this.alwaysGoodIcon, alwaysGoodIcon];
    }

    if (this.girlfriendTimer < timestamp - this.girlfriendSpeed) {
      console.log(this.girlfriend.looking);
      if (!this.girlfriend.looking) {
        this.girlfriend.looking = true;
      } else {
        this.girlfriend.looking = false;
      }
      this.girlfriendTimer = timestamp;
    }

    if (this.nutricionistTimer < timestamp - this.nutricionistSpeed) {
      console.log(this.nutricionist.looking);
      if (!this.nutricionist.looking) {
        this.nutricionist.looking = true;
      } else {
        this.nutricionist.looking = false;
      }
      this.nutricionistTimer = timestamp;
    }

    this.runLogic();
    this.draweverything();
  };

  checkCollision = () => {
    const characterX = this.character.x;
    const characterY = this.character.y;
    const characterXW = this.character.x + this.character.width;
    const characterYH = this.character.y + this.character.height;

    for (let i = 0; i < this.alwaysGoodIcon.length; i++) {
      const alwaysGoodIconX = this.alwaysGoodIcon[i].x;
      const alwaysGoodIconY = this.alwaysGoodIcon[i].y;
      const alwaysGoodIconXW = this.alwaysGoodIcon[i].x + this.alwaysGoodIcon[i].width;
      const alwaysGoodIconYH = this.alwaysGoodIcon[i].y + this.alwaysGoodIcon[i].height;

      if (
        characterXW > alwaysGoodIconX &&
        characterX < alwaysGoodIconXW &&
        characterYH > alwaysGoodIconY &&
        characterY < alwaysGoodIconYH
      ) {
        this.character.Score();
        const index = this.alwaysGoodIcon[i];
        this.alwaysGoodIcon.splice(index, 1);
        this.$scoreNode.innerHTML = '';
        this.$scoreNode.innerHTML = 'Score : ' + this.character.score;
      }
    }
  };
  runLogic = () => {
    for (let i = 0; i < this.alwaysGoodIcon.length; i++) {
      this.alwaysGoodIcon[i].runLogic();
    }
    this.checkCollision();
  };
}
