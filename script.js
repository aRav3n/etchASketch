const sketchBody = document.querySelector('#sketchBody');
const userSizedGrid = document.querySelector('#userSizedGrid');
let sketchRow;
let sketchCell;
let gridSize = 16;

// Draw the initial grid when the page loads
window.addEventListener('DOMContentLoaded', () => {
    drawGrid(gridSize);
});

// Get user input for heightWidth


// Create grid to draw on
function drawGrid (gridSize) {
    for (let i = 0; i < gridSize; i++){
    sketchRow = document.createElement('div');
    sketchRow.classList.add('sketchRow');
    for (j = 0; j < gridSize; j++){
        sketchCell = document.createElement('div');
        sketchCell.classList.add('sketchCell');
        sketchRow.appendChild(sketchCell);
    };
    sketchBody.appendChild(sketchRow);
    };
    sketchMouseMovement();
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