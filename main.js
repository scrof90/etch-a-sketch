const grid = document.getElementById('gridContainer');

const densitySlider = document.getElementById('density');
densitySlider.oninput = function () {
  gridDensity = this.value;
};

const colorPicker = document.getElementById('color');
colorPicker.oninput = function () {
  paintColor = this.value;
};

const resetButton = document.getElementById('reset');
resetButton.onclick = () => resetGrid();

let gridDensity = 50;
let paintColor = '#000000';

function main() {
  resetGrid();
}

function resetGrid() {
  clearGrid();
  grid.style.gridTemplateRows = `repeat(${gridDensity}, auto [row])`;
  grid.style.gridTemplateColumns = `repeat(${gridDensity}, auto [col])`;
  fillGrid();
}

function clearGrid() {
  let cell = grid.lastChild;
  while (cell) {
    grid.removeChild(cell);
    cell = grid.lastChild;
  }
}

function fillGrid() {
  const numOfCells = gridDensity ** 2;
  for (let i = 0; i < numOfCells; i++) {
    const cell = createCell();
    grid.appendChild(cell);
  }
}

function createCell() {
  const cell = document.createElement('div');
  cell.addEventListener('mouseover', function () {
    if (this.style.backgroundColor === paintColor) return;
    this.style.backgroundColor = paintColor;
  });
  return cell;
}

main();
