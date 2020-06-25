import { getRandomInt } from './utils';

export default class DrawUI {
  constructor(path, newClassName) {
    this.fields = [...document.getElementsByClassName('field')];
    this.drawEl = document.createElement('img');
    this.drawEl.src = path;
    this.drawEl.className = newClassName;
  }

  drawElement() {
    let fieldNumber = getRandomInt(0, 3);
    let nextField = this.fields[fieldNumber];

    if (nextField.contains(this.drawEl)) {
      const fieldIndex = this.fields.indexOf(nextField);
      while (fieldNumber === fieldIndex) {
        fieldNumber = getRandomInt(0, 3);
      }
      nextField = this.fields[fieldNumber];
    }
    return nextField.appendChild(this.drawEl);
  }
}
