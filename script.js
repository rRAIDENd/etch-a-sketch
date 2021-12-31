// function createDiv(e){
//     const grid = document.querySelector('#grid');
//     let val = (e.target.value);
//     for (let i=0; i < val; i++){
//         let row = document.createElement('div');
//         row.className = 'grid-row';
//         for (let c=0; c<val; c++){
//             let cell = document.createElement('div');
//             cell.classList.add('cell');
//             row.appendChild(cell);
//         }
//         grid.appendChild(row);
//     }
// }

// //clear grid by removing all child DIVs
// function clearGrid(){
//     const grid = document.querySelector('#grid');
//     while (grid.firstChild){
//         grid.removeChild(grid.firstChild);
//     }
// }

// // add click listener for buttons
// const buttons = document.querySelectorAll('button');

// buttons.forEach((button) =>{
//     button.addEventListener('click', clearGrid);
//     button.addEventListener('click', createDiv);
// })

// function getGridSize(){
//     const list = document.querySelectorAll('.cell')
//     console.log(list)
// }


// function defaultGrid(){
//     const grid = document.querySelector('#grid');
//     for (let i=0; i<16; i++){
//         let row = document.createElement('div');
//         row.className = 'grid-row';
//         for (let c=0; c<16; c++){
//             let cell = document.createElement('div');
//             cell.className = 'cell';
//             row.append(cell);
//         }
//         grid.appendChild(row);
//     }
// }

// // display default settings on load
// window.onload = log =>{
//     console.log('loaded');
// }