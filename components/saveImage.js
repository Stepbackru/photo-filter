const saveImage = (e) => {
  const img = document.querySelector('img');
  const canvas = document.createElement('canvas');
  const link = document.createElement('a');
  const inputBlur = document.querySelector('input[name="blur"]').value;
  
  const originImg = new Image();
  originImg.src = img.src;
  originImg.setAttribute('crossOrigin', 'anonymous');

  const coeff = Math.ceil(originImg.height / img.height);
  canvas.width = originImg.width;
  canvas.height = originImg.height;
  const ctx = canvas.getContext('2d');
  ctx.filter = getComputedStyle(img).filter.replace(`blur(${inputBlur}px)`, `blur(${inputBlur*coeff}px)`);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  link.download = 'image.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
}

export default saveImage;
