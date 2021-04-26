import timeOfDay from './timeOfDay.js';

let count = 0;

const image = () => {
  const img = document.querySelector('img');
  // const randomUrl = `./assets/aviation/${timeOfDay()}/${randomImage(COUNT_IMAGES)}.jpg`;
  if (count > 19) {
    count = 1;
  } else {
    count++;
  }
  const randomUrl = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay()}/${countImage(count)}.jpg`;
  
  fetch(randomUrl)
    .then(res => res.url)
    .then(url => img.src = `${url}`);
}

const countImage = (start) => {
  // const rand = Math.floor(Math.random() * n + 1);
  let number = '' + start;
  if (start < 10) {
    number = '0' + start;
  }
  return number;
}

export default image;
