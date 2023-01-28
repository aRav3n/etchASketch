const sketchBody = document.querySelector('#sketchBody');
let sketchRow;
let sketchColumn;

for (let i = 0; i < 4; i++){
    sketchRow = document.createElement('div');
    sketchRow.classList.add('sketchRow');
    for (j = 0; j < 4; j++){
        sketchColumn = document.createElement('div');
        sketchColumn.classList.add('sketchColumn');
        sketchRow.appendChild(sketchColumn);
    };
    sketchBody.appendChild(sketchRow);
};