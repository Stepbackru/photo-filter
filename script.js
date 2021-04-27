import outputChange from './components/outputs.js';
import reset from './components/reset.js';
import image from './components/image.js';
import loadImage from './components/loadImage.js';
import saveImage from './components/saveImage.js';

window.onload = () => {
  const inputs = [...document.querySelectorAll('.filters label input')];
  const bntReset = document.querySelector('.btn-reset');
  const bntNext = document.querySelector('.btn-next');
  const bntSave = document.querySelector('.btn-save');
  const fileInput = document.querySelector('input[type="file"]');

  inputs.forEach((el) => {
    el.addEventListener('input', outputChange);
  });

  bntReset.addEventListener('click', reset);
  bntNext.addEventListener('click', image);
  fileInput.addEventListener('change', loadImage);
  bntSave.addEventListener('click', saveImage);
}
