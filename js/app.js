p1y = p2y = 40;
pt = 10;
ph = 100;
bx = by = 50;
bd = 6;
xv = yv = 4;
score1 = score2 = 0;
ais = 2;
const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

window.onload = function () {
  setInterval(update, 1000 / 30);
  canvas.addEventListener("mousemove", (event) => {
    p1y = event.clientY - ph / 2;
  });
};

function reset() {
  bx = canvas.width / 2;
  by = canvas.height / 2;
  xv = -xv;
  yv = 3;
}

function update() {
  bx += xv;
  by += yv;

  if (by < 0 && yv < 0) {
    yv = -yv;
  }

  if (by > canvas.height && yv > 0) {
    yv = -yv;
  }

  if (bx < 0) {
    if (by > p1y && by < p1y + ph) {
      xv = -xv;
      dy = by - (p1y + ph / 2);
      yv = dy * 0.3;
    } else {
      score2++;
      reset();
    }
  }

  if (bx > canvas.width) {
    if (by > p2y && by < p2y + ph) {
      xv = -xv;
      dy = by - (p2y + ph / 2);
      yv = dy * 0.3;
    } else {
      score1++;
      reset();
    }
  }

  if (p2y + ph / 2 < by) {
    p2y += ais;
  } else {
    p2y -= ais;
  }

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.fillRect(0, p1y, pt, ph);
  ctx.fillRect(canvas.width - pt, p2y, pt, ph);
  ctx.fillRect(bx - bd / 2, by - bd / 2, bd, bd);

  ctx.fillText(score1, 100, 100);
  ctx.fillText(score2, canvas.width - 100, 100);
}
