const grid = document.querySelector(".grid");
let gridSize = 16;

function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("grid-element");
        gridElement.addEventListener("mouseover", function() {
            gridElement.style.backgroundColor = "black";
        });
        grid.appendChild(gridElement);
    }
}

function setGridSize() {
    gridSize = parseInt(prompt("Please enter the desired grid size", "16"));

    if (Number.isNaN(gridSize)) {
        gridSize = 16;
    } else if (gridSize > 100) {
        alert("Your number must be less than 100!");
    } else if (gridSize < 1) {
        alert("Your grid must be greater than 0!");
    } else {
        clearGrid();
        makeGrid(gridSize);
    }
}

function clearGrid() {
    grid.innerHTML = "";
}

function resetGrid() {
    gridSize = 16;
    clearGrid();
    makeGrid(gridSize);
}

makeGrid(gridSize);