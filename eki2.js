function drawLine() {
  const r = Math.floor(Math.random() * 16) + 1;

  if (r === 1) return 6;
  if (r <= 6) return 7;
  if (r <= 13) return 8;
  return 9;
}

function drawHexagram() {
  const lines = [];

  for(let i = 0; i < 6; i++) {
    lines.push(drawLine());
  }

  document.getElementById("result").textContent =
    lines.join(", ");
}