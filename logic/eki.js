function drawLine() {
  const r = Math.floor(Math.random() * 16) + 1;

  if (r === 1) return 6;
  if (r <= 6) return 7;
  if (r <= 13) return 8;
  return 9;
}

function isChanging(n) {
  return n === 6 || n === 9;
}

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