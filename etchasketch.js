const INITALGRIDDIM = 16;

// const body = document.querySelector("body");
const container = document.querySelector(".container");
// TODO: 
// set min of height or width to be static container dimension 
// so grid displays completely on screen

let [grid, rows, squares] = createGrid(INITALGRIDDIM);

const newGridButton = document.querySelector("button");
newGridButton.addEventListener('click', 
    () => {
        let newGridDim;
        while (newGridDim === undefined || newGridDim > 100) {
            newGridDim = prompt("Enter the number of squares per side for the new grid.\nMax is 100.");
        }
        grid.remove();
        [grid, rows, squares] = createGrid(newGridDim);
    });

function createGrid (gridDim) {
    const grid = document.createElement("div");
    grid.className = "grid";
    container.appendChild(grid);
    let rows = [];  // contains row elements
    let squares = [];   // contains square elements arranged in 2d array grid
    for (let i = 0; i < gridDim; i++) {
        rows.push(document.createElement("div"));
        rows[i].className = "row";
        squares.push([]);
        for (let j = 0; j < gridDim; j++) {
            squares[i].push(document.createElement("div"));
            squares[i][j].className = "square";
            squares[i][j].addEventListener('mouseenter', 
                (event) => event.target.classList.add("colored"));
        }
        rows[i].append(...squares[i]);
    }
    grid.append(...rows);
    return [grid, rows, squares];
}