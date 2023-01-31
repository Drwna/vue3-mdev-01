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
  if (!div) return;
  const width = div.offsetWidth;
  const height = div.offsetHeight;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
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
  div.style.backgroundImage = `url(${canvas.toDataURL('image/png', 0.8)})`;
};

/*
创建高清canvas
 */
export const createHDCanvas = (w: number, h: number) => {
  const canvas = document.createElement('canvas');
  const ratio = window.devicePixelRatio || 1;
  canvas.width = w * ratio; // 实际渲染像素
  canvas.height = h * ratio; // 实际渲染像素
  canvas.style.width = `${w}px`; // 控制显示大小
  canvas.style.height = `${h}px`; // 控制显示大小
  const ctx = canvas.getContext('2d')!;
  ctx.scale(ratio, ratio);
  // canvas 绘制
  return canvas;
};

/*
 * 数组排序
 * @param {Array} arr 需要排序的数组
 * @param {String} key 排序的键
 * @param {String} type 排序的类型(desc:降序,asc:升序)
 * @return {Array} 返回排序后的数组
 */
export const sortArr = <T extends Record<string, any>>(arr: T[], key: string, type: 'desc' | 'asc') => {
  return arr.sort((a, b) => {
    return type === 'desc' ? b[key] - a[key] : a[key] - b[key];
  });
};
