const INITALGRIDDIM = 16;

const container = document.querySelector(".container");

let [grid, rows, squares] = createGrid(INITALGRIDDIM);

window.addEventListener('resize', 
    () => {
        console.log("resize");
        console.log(`height: ${window.innerHeight}, width: ${window.innerWidth}`)
        setGridSize(grid);
    }
);

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
                (event) => event.target.style.backgroundColor = generateRandomColorString());
        }
        rows[i].append(...squares[i]);
    }
    grid.append(...rows);
    setGridSize(grid);
    return [grid, rows, squares];
}

function setGridSize (grid) {
    if (window.innerHeight > window.innerWidth) {
        grid.style.width = "95vw";
        grid.style.height = "auto";
    } else {
        grid.style.width = "auto";
        grid.style.height = "95vh";
    }
}

function generateRandomColorString () {
    // RGB format string: rbg(R G B)
    return `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)})`;
}