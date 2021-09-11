// global variables

const grid = document.getElementById('grid');

const settings = {
  density: 20,
  color: '#000000',
  rainbowMode: false,
  drawingMode: false,
};

// initialization

(function () {
  initTools();
  resetGrid();
})();

function initTools() {
  // reset button callback
  const resetBtn = document.getElementById('resetBtn');
  resetBtn.onclick = resetGrid;

  // density slider callback
  const densitySlider = document.getElementById('densitySlider');
  densitySlider.oninput = () => {
    settings.density = densitySlider.value;
    const densityLabel = document.getElementById('densityLabel');
    densityLabel.innerText = `${settings.density}x${settings.density}`;
  };

  // color picker callback
  const colorPicker = document.getElementById('colorPicker');
  colorPicker.oninput = () => (settings.color = colorPicker.value);

  // rainbow button callback
  const rainbowBtn = document.getElementById('rainbowBtn');
  rainbowBtn.onclick = () => (settings.rainbowMode = !settings.rainbowMode);

  // grid drawing mode callbacks
  grid.addEventListener('mousedown', () => (settings.drawingMode = true));
  grid.addEventListener('mouseup', () => (settings.drawingMode = false));
  grid.addEventListener('mouseleave', () => (settings.drawingMode = false));
}

// grid functions

function resetGrid() {
  grid.textContent = '';
  grid.style.gridTemplateRows = `repeat(${settings.density}, auto [row])`;
  grid.style.gridTemplateColumns = `repeat(${settings.density}, auto [col])`;
  fillGrid(settings.density);
}

function fillGrid(density) {
  const numOfCells = density ** 2;
  for (let i = 0; i < numOfCells; i++) {
    grid.appendChild(getNewCell());
  }
}

function getNewCell() {
  const cell = document.createElement('div');
  cell.addEventListener('mouseover', changeColor);
  return cell;
}

// cell functions

function changeColor(e) {
  if (settings.drawingMode) {
    const cell = e.target;
    if (settings.rainbowMode) {
      cell.style.backgroundColor = getRandomColor();
    } else {
      cell.style.backgroundColor = settings.color;
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
