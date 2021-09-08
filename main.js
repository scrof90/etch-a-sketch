const grid = document.getElementById('gridContainer');

// TODO: put everything in settings obj
let gridDensity = 20;
let paintColor = '#000000';
let rainbowMode = false;
let drawingMode = false;

// initialization

initTools();
resetGrid();

function initTools() {
  // reset button callback
  document.getElementById('reset').onclick = resetGrid;
  // density slider callback
  document.getElementById('density').oninput = function () {
    gridDensity = this.value;
    document.getElementById(
      'densityLabel'
    ).innerText = `${gridDensity}x${gridDensity}`;
  };
  // color picker callback
  document.getElementById('color').oninput = function () {
    paintColor = this.value;
  };
  // rainbow button callback
  document.getElementById('rainbow').onclick = () => {
    rainbowMode = !rainbowMode;
  };
  // grid drawing mode callback
  grid.addEventListener('mousedown', () => (drawingMode = true));
  // window drawing mode disable callback
  window.addEventListener('mouseup', () => (drawingMode = false));
}

// grid functions

function resetGrid() {
  grid.textContent = '';
  grid.style.gridTemplateRows = `repeat(${gridDensity}, auto [row])`;
  grid.style.gridTemplateColumns = `repeat(${gridDensity}, auto [col])`;
  fillGrid(gridDensity ** 2);
}

/* function clearGrid() {
  let cell = grid.lastChild;
  while (cell) {
    grid.removeChild(cell);
    cell = grid.lastChild;
  }
} */

function fillGrid(numOfCells) {
  for (let i = 0; i < numOfCells; i++) {
    grid.appendChild(getNewCell());
  }
}

function getNewCell() {
  const cell = document.createElement('div');
  cell.draggable = false;
  cell.addEventListener('mouseover', changeColor);
  return cell;
}

// cell functions

function changeColor(e) {
  if (drawingMode) {
    if (rainbowMode) {
      e.target.style.backgroundColor = getRandomColor();
    } else {
      e.target.style.backgroundColor = paintColor;
    }
  }
}

function getRandomColor() {
  const red = getRandomInt(255);
  const green = getRandomInt(255);
  const blue = getRandomInt(255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
