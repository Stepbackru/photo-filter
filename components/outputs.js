import styleImage from './styleImage.js';

const outputChange = (e) => {
  const item = e.target;

  item.nextElementSibling.innerText = item.value;
  styleImage(item);
}

export default outputChange;
