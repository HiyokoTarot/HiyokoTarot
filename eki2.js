function drawLine() {
  const r = Math.floor(Math.random() * 16) + 1; // 1〜16

  if (r === 1) return 6;          // 1/16
  if (r <= 6) return 7;           // 5/16
  if (r <= 13) return 8;          // 7/16
  return 9;                       // 3/16
}

function lineSymbol(n) {
  if (n === 6 || n === 8) return "-- --";
  if (n === 7 || n === 9) return "-----";
}

function drawHexagram() {
  const lines = [];

  for(let i = 0; i < 6; i++) {
    lines.push(drawLine());
  }

  let result = "";

  for(let i = 5; i >= 0; i--) {
    result += lineSymbol(lines[i]) + "\n";
  }


  document.getElementById("result").textContent =
    lines.join(", ");
}

function lineType(n) {
  if (n === 6) return "老陰";
  if (n === 7) return "少陽";
  if (n === 8) return "少陰";
  if (n === 9) return "老陽";
}

function lineSymbol(n) {
  if (n === 6 || n === 8) return "-- --"; // 陰
  if (n === 7 || n === 9) return "-----"; // 陽
}

function isChanging(n) {
  return n === 6 || n === 9;
}