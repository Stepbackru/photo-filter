const saveImage = (e) => {
  const img = document.querySelector('img');
  const canvas = document.createElement('canvas');
  const link = document.createElement('a');
  const inputBlur = document.querySelector('input[name="blur"]').value;
  
  const coeff = Math.ceil(img.naturalHeight / img.height);
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  ctx.filter = getComputedStyle(img).filter.replace(`blur(${inputBlur}px)`, `blur(${inputBlur*coeff}px)`);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  link.download = 'image.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
}

export default saveImage;
