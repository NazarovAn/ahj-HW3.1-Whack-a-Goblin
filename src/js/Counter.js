export default class Counter {
  constructor() {
    this.pointsCounter = document.getElementById('points-counter');
    this.missCounter = document.getElementById('miss-counter');
  }

  increasePoints() {
    let int = parseInt(this.pointsCounter.textContent, 10);
    int += 1;
    this.pointsCounter.textContent = int;
  }

  increaseMissPoints() {
    let int = parseInt(this.missCounter.textContent, 10);
    int += 1;
    this.missCounter.textContent = int;
  }

  clearCounters() {
    this.pointsCounter.textContent = '0';
    this.missCounter.textContent = '0';
  }

  get misses() {
    return this.missCounter.textContent;
  }
}
