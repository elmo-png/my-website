const canvas = document.getElementById("wellen");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

let t = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0066ff";

  const waveHeight = 40;
  const waveLength = 60;

  ctx.beginPath();
  for (let x = 0; x <= canvas.width; x++) {
    const y = Math.sin((x + t) / waveLength) * waveHeight + canvas.height / 2;
    ctx.lineTo(x, y);
  }

  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();

  t += 2;
  requestAnimationFrame(draw);
}

draw();
