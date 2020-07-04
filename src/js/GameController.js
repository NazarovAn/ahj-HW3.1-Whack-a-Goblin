import { toggleHiddenClass } from './utils';

export default class GameController {
  constructor(ui, counter) {
    this.container = document.getElementById('container');
    this.newGameButton = document.getElementById('new-game');
    this.GameEndButton = document.getElementById('game-end');
    this.ui = ui;
    this.drawEl = ui.drawEl;
    this.fields = ui.fields;
    this.newInterval = 0;
    this.newCounter = counter;
    this.startAgain = () => this.newGame();
  }

  init() {
    this.addListners();
    this.setNewInterval();
  }

  addListners() {
    this.fields.forEach((field) => {
      field.addEventListener('click', (click) => {
        if (this.findTargetOnField(click, field)) {
          return;
        }

        this.newCounter.increaseMissPoints();
        this.checkMisses();
      });
    });
  }

  setNewInterval() {
    this.newInterval = setInterval(() => {
      this.ui.drawElement(this.drawEl);
      setTimeout(() => this.checkGoblin(), 980);
    }, 1000);
  }

  checkGoblin() {
    if (this.container.querySelector('img') === null) {
      return;
    }
    this.newCounter.increaseMissPoints();
    this.checkMisses();
  }

  findTargetOnField(click, area) {
    if (click.target.contains(this.ui.drawEl)) {
      this.hit(area);
      return true;
    }
    return false;
  }

  hit(area) {
    area.removeChild(this.ui.drawEl);
    this.newCounter.increasePoints();
  }

  checkMisses() {
    if (this.newCounter.misses === '5') {
      this.newGameButton.removeEventListener('click', this.startAgain);
      clearInterval(this.newInterval);
      toggleHiddenClass(this.newGameButton, this.GameEndButton);
      this.newGameButton.addEventListener('click', this.startAgain);
    }
  }

  newGame() {
    this.newInterval = this.setNewInterval();
    this.newCounter.clearCounters();
    toggleHiddenClass(this.newGameButton, this.GameEndButton);
  }
}
