function drawLine() {
  const r = Math.floor(Math.random() * 16) + 1;

  if (r === 1) return 6;
  if (r <= 6) return 7;
  if (r <= 13) return 8;
  return 9;
}

function lineType(n) {
  if (n === 6) return "老陰";
  if (n === 7) return "少陽";
  if (n === 8) return "少陰";
  if (n === 9) return "老陽";
}

function lineSymbol(n) {
  if (n === 6 || n === 8) return "-- --";
  if (n === 7 || n === 9) return "-----";
}

function isChanging(n) {
  return n === 6 || n === 9;
}

function drawHexagram() {
  const lines = [];

  for(let i = 0; i < 6; i++) {
    lines.push(drawLine());
  }

  let result = "";

for(let i = 5; i >= 0; i--) {
  result += lineSymbol(lines[i])
         + " "
         + lineType(lines[i])
         + "\n";  }

return {
  lines,
  changedLines,
  changedHexagram
};

function getChangedLines(lines) {
  const names = ["初爻", "二爻", "三爻", "四爻", "五爻", "上爻"];

  return lines
    .map((line, index) => isChanging(line) ? names[index] : null)
    .filter(Boolean);
}

function changeLine(n) {
  if (n === 6) return 7;
  if (n === 9) return 8;
  return n;
}

export function drawHexagram() {
  const lines = [];

  for (let i = 0; i < 6; i++) {
    lines.push(drawLine());
  }

  const changedLines = getChangedLines(lines);
  const changedHexagram = lines.map(changeLine);

  return {
    lines,
    changedLines,
    changedHexagram
  };
}
