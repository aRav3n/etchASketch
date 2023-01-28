const sketchBody = document.querySelector('#sketchBody');
let sketchRow;
let sketchColumn;

for (let i = 0; i < 16; i++){
    sketchRow = document.createElement('div');
    sketchRow.classList.add('sketchRow');
    for (j = 0; j < 16; j++){
        sketchColumn = document.createElement('div');
        sketchColumn.classList.add('sketchColumn');
        sketchRow.appendChild(sketchColumn);
    };
    sketchBody.appendChild(sketchRow);
};