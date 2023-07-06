function makeGrid() {
    const grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = "repeat(16, 1fr)";
    grid.style.gridTemplateRows = "repeat(16, 1fr)";

    for (let i = 0; i < 16 * 16; i++) {
        const gridElement = document.createElement("grid-element");
        // gridElement.style.border = "1px solid black";
        grid.appendChild(gridElement);
    }
}

makeGrid();