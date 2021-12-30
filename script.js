const grid = document.querySelector('#grid');


function makeDiv(val){
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

makeDiv(9);

//changed
