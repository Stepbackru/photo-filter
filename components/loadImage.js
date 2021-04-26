const loadImage = (e) => {
  const img = document.querySelector('img');
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    img.src = reader.result;
  }
  reader.readAsDataURL(file);
  e.target.value = '';
}

export default loadImage;
