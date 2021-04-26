  const reset = () => {
    const inputs = [...document.querySelectorAll('.filters label input')];

    inputs.forEach((el) => {
      el.value = el.defaultValue;
      el.nextElementSibling.value = el.value;
    });
  }

export default reset;
