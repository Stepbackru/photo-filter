const outputChange = (e) => {
  const item = e.target;

  item.nextElementSibling.innerText = item.value;
}

export default outputChange;
