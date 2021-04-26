const styleImage = (input) => {
  const img = document.querySelector('img');

  img.style.setProperty(`--${input.name}`, input.value + input.dataset.sizing);
}

export default styleImage;
