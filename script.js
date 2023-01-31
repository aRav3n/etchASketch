const sketchBody = document.querySelector('#sketchBody');
let sketchRow;
let sketchCell;
let heightWidth = 16;

for (let i = 0; i < heightWidth; i++){
    sketchRow = document.createElement('div');
    sketchRow.classList.add('sketchRow');
    for (j = 0; j < heightWidth; j++){
        sketchCell = document.createElement('div');
        sketchCell.classList.add('sketchCell');
        sketchRow.appendChild(sketchCell);
    };
    sketchBody.appendChild(sketchRow);
};

let sketchCells = document.querySelectorAll('.sketchCell');

sketchCells.forEach(sketchCell => {
    sketchCell.addEventListener('mouseover', () => {
        sketchCell.classList.add('draw');
    });
});