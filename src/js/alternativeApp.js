const newGameButton = document.getElementById('new-game');
const GameEndButton = document.getElementById('game-end');
const pointsCounter = document.getElementById('points-counter');
const missCounter = document.getElementById('miss-counter');
const fields = [...document.getElementsByClassName('field')];
const goblinEl = document.createElement('img');
goblinEl.src = 'goblin.png';
goblinEl.className = 'img';

export default function getRandomInt(min, max) {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
}

function increaseAndRedeawPoints(element) {
  const count = element;
  let int = parseInt(element.textContent, 10);
  int += 1;
  count.textContent = int;
}

function drawGoblin() {
  let fieldNumber = getRandomInt(0, 3);
  let nextField = fields[fieldNumber];

  if (nextField.contains(goblinEl)) {
    const fieldIndex = fields.indexOf(nextField);
    while (fieldNumber === fieldIndex) {
      fieldNumber = getRandomInt(0, 3);
    }
    nextField = fields[fieldNumber];
  }

  nextField.appendChild(goblinEl);
}

function toggleHiddenClass(...el) {
  el.forEach((item) => item.classList.toggle('hidden'));
}

function clearCounters(...el) {
  el.forEach((item) => {
    const element = item;
    element.textContent = '0';
  });
}

function startInterval(fn, ms) {
  return setInterval(() => fn(), ms);
}

let newInterval = startInterval(drawGoblin, 1000);

fields.forEach((field) => {
  field.addEventListener('click', (item) => {
    if (item.target.contains(goblinEl)) {
      field.removeChild(goblinEl);
      increaseAndRedeawPoints(pointsCounter);
      return;
    }
    increaseAndRedeawPoints(missCounter);

    if (missCounter.textContent === '5') {
      clearInterval(newInterval);
      toggleHiddenClass(newGameButton, GameEndButton);

      newGameButton.addEventListener('click', () => {
        newInterval = startInterval(drawGoblin, 600);
        clearCounters(pointsCounter, missCounter);
        toggleHiddenClass(newGameButton, GameEndButton);
      });
    }
  });
});
