class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.gameIsRunning = false;
    this.$scoreNode = document.getElementById('score');
    this.obstacles = [];
    this.character = new Character(this);
    this.girlfriend = new Girlfriend(this);
    this.nutricionist = new Nutricionist(this);
    this.time = 0;
    this.girlfriendTimer = 0;
    this.nutricionistTimer = 0;
    this.speed = 500 + Math.random() * 1000;
    this.girlfriendSpeed = 5000 + Math.random() * 4000;
    this.nutricionistSpeed = 5000 + Math.random() * 4000;
    this.score = 0;
    this.loveSound = new Audio();
    this.loveSound.src = './sounds/love.mp3';
    this.waterSound = new Audio();
    this.waterSound.src = './sounds/water.mp3';
    this.moneySound = new Audio();
    this.moneySound.src = './sounds/money.mp3';
    this.marlboroSound = new Audio();
    this.marlboroSound.src = './sounds/cough.mp3';
    this.beerSound = new Audio();
    this.beerSound.src = './sounds/beer.mp3';
    this.sorrySound = new Audio();
    this.sorrySound.src = './sounds/sorry.mp3';
    this.instrumentalSound = new Audio();
    this.instrumentalSound.src = './sounds/instrumental.mp3';
    this.gameOverGf = new Image();
    this.gameOverGf.src = './images/gameover1.jpeg';
    this.gameOverNt = new Image();
    this.gameOverNt.src = './images/gameover2.jpg';
    this.gameOverCigar = new Image();
    this.gameOverCigar.src = './images/gameover3.jpg';
    this.drawTitle();
    this.loopnum = 0;
  }
  drawTitle() {
    this.context.font = '54px fantasy';
    this.context.fillText('All 👀 on Me!', 260, 80, 656, 640);
  }
  reset() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.score = 0;
    this.$scoreNode.innerHTML = 'Score : ' + this.score;
    this.obstacles = [];
    this.character = new Character(this);
    this.girlfriend = new Girlfriend(this);
    this.nutricionist = new Nutricionist(this);
    this.time = 0;
    this.girlfriendTimer = 0;
    this.nutricionistTimer = 0;
    this.speed = 500 + Math.random() * 1000;
    this.girlfriendSpeed = 5000 + Math.random() * 4000;
    this.nutricionistSpeed = 5000 + Math.random() * 4000;

    if (!this.gameIsRunning) {
      this.loop();
      this.startGame();
    } else {
      delete this.animation;
    }
  }

  startGame() {
    this.instrumentalSound.play();
    this.gameIsRunning = true;
  }

  gameOver(reason) {
    if (reason === 'gf') {
      this.context.drawImage(this.gameOverGf, 200, 200, 400, 400);
    } else if (reason === 'nt') {
      this.context.drawImage(this.gameOverNt, 200, 200, 400, 400);
    } else if (reason === 'cigar') {
      this.context.drawImage(this.gameOverCigar, 200, 200, 400, 400);
    }
  }

  paintWhiteRectangles = () => {
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 595, 124, 128);
    this.context.fillStyle = 'black';
    this.context.fillRect(676, 595, 124, 128);
    this.context.stroke();
    this.context.font = '70px fantasy';
    this.context.fillText('All 👀 on Me!', 240, 80, 656, 640);
  };

  draweverything() {
    if (this.gameIsRunning) {
      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      this.paintWhiteRectangles();
      this.character.paint();
      this.girlfriend.paint();
      this.nutricionist.paint();
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].paint();
      }
    } else {
      this.gameOver();
    }
  }

  loop(timestamp) {
    this.animation = window.requestAnimationFrame(timestamp => {
      if (this.gameIsRunning) {
        this.loop(timestamp);
      }
    });

    if (this.girlfriendTimer < timestamp - this.girlfriendSpeed) {
      if (!this.girlfriend.looking) {
        this.girlfriend.looking = true;
      } else {
        this.girlfriend.looking = false;
      }
      this.girlfriendTimer = timestamp;
    }

    if (this.nutricionistTimer < timestamp - this.nutricionistSpeed) {
      if (!this.nutricionist.looking) {
        this.nutricionist.looking = true;
      } else {
        this.nutricionist.looking = false;
      }
      this.nutricionistTimer = timestamp;
    }

    if (this.time < timestamp - this.speed) {
      this.time = timestamp;
      const obs = new Obstacles(this);
      this.obstacles = [...this.obstacles, obs];
    }
    this.character.updateMove();
    this.runLogic();
    this.draweverything();
  }

  checkCollision = () => {
    const characterX = this.character.x;
    const characterY = this.character.y;
    const characterXW = this.character.x + this.character.width;
    const characterYH = this.character.y + this.character.height;

    for (let i = 0; i < this.obstacles.length; i++) {
      const obsX = this.obstacles[i].x;
      const obsY = this.obstacles[i].y;
      const obsXW = this.obstacles[i].x + this.obstacles[i].width;
      const obsYH = this.obstacles[i].y + this.obstacles[i].height;

      if (characterXW > obsX && characterX < obsXW && characterYH > obsY && characterY < obsYH) {
        if (this.obstacles[i].name === 'marlboro') {
          this.gameIsRunning = false;
          this.gameOver('cigar');
          this.instrumentalSound.pause();
          this.marlboroSound.play();
        } else if (this.girlfriend.looking === true && this.obstacles[i].name === 'alba') {
          this.gameIsRunning = false;
          this.gameOver('gf');
          this.instrumentalSound.pause();
          this.sorrySound.play();
        } else if (this.nutricionist.looking === true && this.obstacles[i].name === 'beer') {
          this.gameIsRunning = false;
          this.gameOver('nt');
          this.instrumentalSound.pause();
          this.sorrySound.play();
        } else if (this.girlfriend.looking === true && this.obstacles[i].name === 'love') {
          this.score += 2;
          this.loveSound.play();
        } else if (this.nutricionist.looking === true && this.obstacles[i].name === 'water') {
          this.score += 2;
          this.waterSound.play();
        } else if (this.obstacles[i].name === 'beer') {
          this.beerSound.play();
        } else if (this.obstacles[i].name === 'money') {
          this.moneySound.play();
        } else {
          this.gameIsRunning = true;
        }
        this.score += 1;
        const index = i;
        this.obstacles.splice(index, 1);
        this.$scoreNode.innerHTML = '';
        this.$scoreNode.innerHTML = 'Score : ' + this.score;
      }
    }
  };
  runLogic = () => {
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].runLogic();
    }
    this.checkCollision();
  };
}
