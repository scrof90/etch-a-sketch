const grid = document.getElementById('gridContainer');

let gridWidth = 16;
let gridHeight = 16;

function main() {
  initGrid();
}

function initGrid() {
  grid.style.gridTemplateRows = `repeat(${gridWidth}, 30px [row])`;
  grid.style.gridTemplateColumns = `repeat(${gridHeight}, 30px [col])`;
  fillGrid(gridWidth, gridHeight);
}

function resetGrid() {
  clearGrid();
  initGrid();
}

function clearGrid() {
  let cell = grid.lastChild;
  while (cell) {
    grid.removeChild(cell);
    cell = grid.lastChild;
  }
}

function fillGrid(width, height) {
  const numOfCells = width * height;
  for (let i = 0; i < numOfCells; i++) {
    const cell = document.createElement('div');
    cell.id = `cell_${i}`;
    cell.addEventListener(
      'mouseover',
      () => (cell.style.backgroundColor = 'white')
    );
    grid.appendChild(cell);
  }
}
main();
