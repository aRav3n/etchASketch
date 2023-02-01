const sketchBody = document.querySelector('#sketchBody');
const changeGridSize = document.querySelector('#changeGridSize');
let gridSize = 16;

// Draw the initial grid when the page loads
window.addEventListener('DOMContentLoaded', () => {
    drawGrid(gridSize);
});

// Get user input for heightWidth
changeGridSize.addEventListener('click', () => {
    gridSize = prompt("What size grid would you like? Cannot be greater than 100.");
    gridSize > 100 ? gridSize = 100 : gridSize = gridSize;
    wipeCellsClear();
    drawGrid(gridSize);
});

// Create grid to draw on
function drawGrid(size) {
    sketchBody.innerHTML = '';
    for (let i = 0; i < size; i++){
    let sketchRow = document.createElement('div');
    sketchRow.classList.add('sketchRow');
    for (j = 0; j < size; j++){
        sketchCell = document.createElement('div');
        sketchCell.classList.add('sketchCell');
        sketchRow.appendChild(sketchCell);
    };
    sketchBody.appendChild(sketchRow);
    };
    sketchMouseMovement();
};

// Clear previously sketched cells
function wipeCellsClear() {
    let sketchCells = document.querySelectorAll('.sketchCell');
    sketchCells.forEach(sketchCell => {
        sketchCell.classList.remove('draw');
    });
};

// Allow the user to draw on the grid by adding draw class to sketchCell
function sketchMouseMovement() {
    let sketchCells = document.querySelectorAll('.sketchCell');
    sketchCells.forEach(sketchCell => {
        sketchCell.addEventListener('mouseover', () => {
        sketchCell.classList.add('draw');
    });
});
};