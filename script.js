import outputChange from './components/outputs.js';
import reset from './components/reset.js';

window.onload = () => {
  const inputs = [...document.querySelectorAll('.filters label input')];
  const bntReset = document.querySelector('.btn-reset');

  inputs.forEach((el) => {
    el.addEventListener('input', outputChange);
  });

  bntReset.addEventListener('click', reset);
}
