  const reset = () => {
    const inputs = [...document.querySelectorAll('.filters label input')];
    const img = document.querySelector('img');


    inputs.forEach((el) => {
      el.value = el.defaultValue;
      el.nextElementSibling.value = el.value;
      img.style.setProperty(`--${el.name}`, el.value + el.dataset.sizing);
    });
  }

export default reset;
