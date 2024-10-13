let masterDiv = document.createElement('div');
masterDiv.id = 'masterDiv';
document.body.appendChild(masterDiv);

for (i = 0; i <= 16 * 16; i++){
    let gridPixel = document.createElement('div');
    gridPixel.classList.add('grid-pixel');
    masterDiv.appendChild(gridPixel);
}

