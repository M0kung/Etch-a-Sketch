let masterDiv = document.createElement('div');
let gridSizeSpan = document.createElement('span');
let gridSlider = document.createElement('input');

masterDiv.id = 'masterDiv';
gridSlider.id = 'gridSlider';
document.body.appendChild(gridSizeSpan);
document.body.appendChild(gridSlider);
document.body.appendChild(masterDiv);
gridSizeSpan.id = 'gridSizeSpan';


gridSlider.setAttribute('type', 'range')
gridSlider.value = "16";
gridSlider.setAttribute('min', 8)
gridSlider.setAttribute('max', 40)
gridSlider.setAttribute('step', 8)

function setGrid(gridSize){
     
    for (i = 1; i <= gridSize * gridSize; i++){
        let gridPixel = document.createElement('div');
        let pixelSize = 320/gridSize + "px";
        gridPixel.classList.add('grid-pixel');
        
        gridPixel.style.width = pixelSize;
        gridPixel.style.height = gridPixel.style.width;
        
        //console.log(gridPixel.width)

        //gridPixel.textContent = i;
        //console.log(i);
        gridPixel.style.fontSize = "8px"; 
        masterDiv.appendChild(gridPixel);
        gridPixel.addEventListener('mouseover',function(){
            this.style.background = "yellow";
            });
        gridSlider.addEventListener('input',function(){
            gridPixel.remove();
            });
    } 
} 
setInputValue();

gridSlider.addEventListener('input',function(){
    setInputValue();
});

function setInputValue(){
    let gridSize = gridSlider.value;
    setGrid(gridSize);
    gridSizeSpan.textContent = "Grid Size "+ gridSlider.value + " x " + gridSlider.value + " ";
}
console.log("gridslide value" + gridSlider.value);