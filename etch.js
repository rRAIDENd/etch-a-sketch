const container = document.querySelector('#grid');
const resizeGrid = document.querySelector('.resize');
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
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell)=>{
        cell.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = 'black';
        })
    });
}

function rainbow(){
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell)=>{
        cell.addEventListener('mouseover', (e)=>{
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            e.target.style.setProperty(
                "background-color",
                `rgba(${red},${green},${blue})`
            );
        } )
    })
}


resizeGrid.addEventListener('click', updateGrid);
resetButton.addEventListener('click', resetGrid)
rainbowMode.addEventListener('click', rainbow)



window.onload = () =>{
    defaultGrid();
}