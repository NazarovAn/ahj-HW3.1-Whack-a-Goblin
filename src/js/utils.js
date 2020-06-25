export function getRandomInt(min, max) {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
}

export function toggleHiddenClass(...el) {
  el.forEach((item) => item.classList.toggle('hidden'));
}
