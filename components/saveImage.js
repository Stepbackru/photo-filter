const saveImage = (e) => {
  const img = document.querySelector('img');
  const canvas = document.createElement('canvas');
  const link = document.createElement('a')
  
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.filter = getComputedStyle(img).filter;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  link.download = 'image.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
}

export default saveImage;
