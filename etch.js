const container = document.querySelector('#grid');
const resizeGrid = document.querySelector('.resize');
const defaultMode = document.querySelector('.black-white');
const rainbowMode = document.querySelector('.rainbow');
const resetButton = document.querySelector('.reset');


function defaultGrid(val = 32){
    for(let i=0; i<val*val; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.append(cell);
    }
    // set number of columns based on val
    container.style.setProperty(
        "grid-template-columns",
        `repeat(${val}, auto)`
    )
    // set number of rows based on val
    container.style.setProperty(
        "grid-template-rows",
        `repeat(${val}, auto)`
    )
    grey(); // let grey be the default color mode
}

function updateGrid(){
    let gridSize = prompt("Enter grid size: (1-100)");
    if (gridSize > 100 || gridSize < 1){
        alert("Invalid Input - Please enter value between 1-100")
    } else{
        container.innerHTML = '';
        defaultGrid(gridSize);
    }
}

function resetGrid(){
    container.innerHTML = '';
    defaultGrid();
}

function grey(){
    const c = document.querySelectorAll('.cell');

    c.forEach((cell)=>{
        cell.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = 'grey';
        })
    });
}


resizeGrid.addEventListener('click', updateGrid);
resetButton.addEventListener('click', resetGrid)



window.onload = () =>{
    defaultGrid();
}