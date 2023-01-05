/*
返回一个介于min和max之间的随机整数，包括min和max
 */
export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/*
模糊div的背景
 */
export const blurBg = (div: HTMLDivElement) => {
  console.log('blurBg');
  if (!div) return;
  const width = div.offsetWidth;
  const height = div.offsetHeight;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  // 生成随机的干扰线
  for (let i = 0; i < 50; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.lineTo(Math.random() * width, Math.random() * height);
    ctx.strokeStyle = `rgba(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${Math.random()})`;
    ctx.stroke();
  }
  // 生成随机的干扰点
  for (let i = 0; i < 800; i++) {
    ctx.beginPath();
    // radius:1
    ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 2, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${Math.random()})`;
    ctx.fill();
  }
  div.style.backgroundImage = `url(${canvas.toDataURL("image/png", 0.8)})`;
};
