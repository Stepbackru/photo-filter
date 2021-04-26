  const reset = () => {
    const inputs = [...document.querySelectorAll('.filters label input')];

    inputs.forEach((el) => {
      el.value = el.defaultValue;
      console.log(el);
      el.nextElementSibling.value = el.value;
    });
  }

export default reset;
