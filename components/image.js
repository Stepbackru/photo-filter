import timeOfDay from './timeOfDay.js';

let count = 0;

const image = () => {
  const img = document.querySelector('img');
  if (count > 19) {
    count = 1;
  } else {
    count++;
  }
  const randomUrl = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay()}/${countImage(count)}.jpg`;
  img.setAttribute('crossOrigin', 'anonymous');

  fetch(randomUrl)
    .then(res => res.url)
    .then(url => img.src = `${url}`);
}

const countImage = (start) => {
  let number = '' + start;
  if (start < 10) {
    number = '0' + start;
  }
  return number;
}

export default image;
