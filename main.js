let gridWidth = 16;
let gridHeight = 16;

function main() {
  initGrid();
}

function initGrid() {
  const grid = document.getElementById('gridContainer');
  grid.style.gridTemplateRows = `repeat(${gridWidth}, 30px [row])`;
  grid.style.gridTemplateColumns = `repeat(${gridHeight}, 30px [col])`;

  for (let i = 0; i < gridWidth * gridHeight; i++) {
    const cell = document.createElement('div');
    cell.id = `cell_${i}`;
    cell.addEventListener('mouseover', () => cell.style.backgroundColor = 'white');
    grid.appendChild(cell);
  }
}

function resetGrid() {
  const grid = document.getElementById('gridContainer');

  let cell = grid.lastChild;
  while (cell) {
    grid.removeChild(cell);
    cell = grid.lastChild;
  }

  initGrid();
}

main();