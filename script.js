import outputChange from './components/outputs.js';
import reset from './components/reset.js';
import image from './components/image.js';

window.onload = () => {
  const inputs = [...document.querySelectorAll('.filters label input')];
  const bntReset = document.querySelector('.btn-reset');
  const bntNext = document.querySelector('.btn-next');

  inputs.forEach((el) => {
    el.addEventListener('input', outputChange);
  });

  bntReset.addEventListener('click', reset);
  bntNext.addEventListener('click', image);
}
