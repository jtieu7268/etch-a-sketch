const INITALGRIDDIM = 16;

// const body = document.querySelector("body");
const container = document.querySelector(".container");
// TODO: 
// set min of height or width to be static container dimension 
// so grid displays completely on screen

let rows = [];  // contains row elements
let squares = [];   // contains square elements arranged in 2d array grid
for (let i = 0; i < INITALGRIDDIM; i++) {
    rows.push(document.createElement("div"));
    rows[i].className = "row";
    squares.push([]);
    for (let j = 0; j < INITALGRIDDIM; j++) {
        squares[i].push(document.createElement("div"));
        squares[i][j].className = "square";
    }
    rows[i].append(...squares[i]);
}
container.append(...rows);