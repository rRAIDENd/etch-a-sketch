const container = document.querySelector('#grid');
const USERINPUT = document.querySelectorAll('#grid-size');


function grid(val = 32){
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

}

grid();
console.log(USERINPUT)

const c = document.querySelectorAll('.cell');

c.forEach((cell)=>{
    cell.addEventListener('mouseover', (e)=>{
        e.target.style.backgroundColor = 'grey';
    })
});