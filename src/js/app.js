import Counter from './Counter';
import DrawUI from './DrawUI';
import GameController from './GameController';

const newCounter = new Counter();
const newUI = new DrawUI('goblin.png', 'img');
const newController = new GameController(newUI, newCounter);

newController.addListners();
