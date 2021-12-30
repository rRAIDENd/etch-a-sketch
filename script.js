
function makeDiv(e){
    const grid = document.querySelector('#grid');
    clearGrid(grid);
    let val = (e.target.value);
    console.log(val)
    for (let i=0; i < val; i++){
        let row = document.createElement('div');
        row.className = 'grid-row';
        for (let c=0; c<val; c++){
            let cell = document.createElement('div');
            // cell.className = 'row-cell-' + val, 'cell';
            cell.classList.add('cell')
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function clearGrid(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) =>{
    button.addEventListener('click', makeDiv);
})