(function () {
  const grid = document.getElementById('gridContainer');

  let gridDensity = 20;
  let paintColor = '#000000';

  main();

  function main() {
    initSlider();
    initColorPicker();
    initResetButton();
    resetGrid();

    function initSlider() {
      const densitySlider = document.getElementById('density');
      densitySlider.oninput = function () {
        gridDensity = this.value;

        const densityLabel = document.getElementById('densityLabel');
        densityLabel.innerText = `${gridDensity}x${gridDensity}`;
      };
    }

    function initColorPicker() {
      const colorPicker = document.getElementById('color');
      colorPicker.oninput = function () {
        paintColor = this.value;
      };
    }

    function initResetButton() {
      const resetButton = document.getElementById('reset');
      resetButton.onclick = () => resetGrid();
    }
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
      const cell = getNewCell();
      grid.appendChild(cell);
    }

    function getNewCell() {
      const cell = document.createElement('div');
      cell.addEventListener('mouseover', function () {
        if (this.style.backgroundColor === paintColor) return;
        this.style.backgroundColor = paintColor;
      });
      return cell;
    }
  }
})();