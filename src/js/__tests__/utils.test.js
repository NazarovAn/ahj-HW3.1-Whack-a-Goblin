import { getRandomInt } from '../utils';

test('randomInt', () => {
  const randomInt = getRandomInt();
  expect(typeof randomInt).toBe('number');
});
