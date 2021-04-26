import timeOfDay from './timeOfDay.js';

const COUNT_IMAGES = 5;

const image = () => {
  const img = document.querySelector('img');
  const randomUrl = `./assets/aviation/${timeOfDay()}/${randomImage(COUNT_IMAGES)}.jpg`;
  
  fetch(randomUrl)
    .then(res => res.url)
    .then(url => img.src = `${url}`);
}

const randomImage = (n) => {
  const rand = Math.floor(Math.random() * n + 1);
  let number = '' + rand;
  if (rand < 10) {
    number = '0' + rand;
  }
  return number;
}

export default image;