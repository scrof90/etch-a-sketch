const grid = document.getElementById('gridContainer');

const rowsInput = document.getElementById('rows');
rowsInput.addEventListener('input', (e) => (gridRows = e.target.value));

const colsInput = document.getElementById('cols');
colsInput.addEventListener('input', (e) => (gridCols = e.target.value));

const colorInput = document.getElementById('color');
colorInput.addEventListener('input', (e) => (paintColor = e.target.value));

let gridRows = 16;
let gridCols = 16;
let paintColor = '#000000';

function main() {
  resetGrid();
}

function resetGrid() {
  clearGrid();
  grid.style.gridTemplateRows = `repeat(${gridRows}, auto [row])`;
  grid.style.gridTemplateColumns = `repeat(${gridCols}, auto [col])`;
  fillGrid(gridRows, gridCols);
}

function clearGrid() {
  let cell = grid.lastChild;
  while (cell) {
    grid.removeChild(cell);
    cell = grid.lastChild;
  }
}

function fillGrid(rows, cols) {
  const numOfCells = rows * cols;
  for (let i = 0; i < numOfCells; i++) {
    const cell = document.createElement('div');
    cell.id = `cell_${i}`;
    cell.addEventListener('mouseover', colorCell);
    grid.appendChild(cell);
  }
}

function colorCell() {
  if (this.style.backgroundColor === paintColor) return;
  this.style.backgroundColor = paintColor;
}

function updateValue(e) {
  log.textContent = e.target.value;
}

main();
