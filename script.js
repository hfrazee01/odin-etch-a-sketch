const grid = document.querySelector(".grid");  // grid stores grid elements
let gridSize = 16;  // stores the current grid size
let rainbow = false;  // rainbow setting tracker
let shade = false;  // shading setting tracker

// makes the grid with elements
function makeGrid(size) {
    // sets the number of columns and rows for the grid which should be equal
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // loop through to add each grid element
    for (let i = 0; i < size * size; i++) {
        // create grid element
        const gridElement = document.createElement("grid-element");
        if (rainbow) {
            // add event listener for rainbow setting with random rgb value as background
            gridElement.addEventListener("mouseover", function() {
                const red = Math.random() * 256;
                const green = Math.random() * 256;
                const blue = Math.random() * 256;
                gridElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            });    
        } else if (shade) {
            // add event listener for shading setting and add 0.1 to alpha value of rgba for each hover
            let times = 1;  // hover times tracker
            gridElement.addEventListener("mouseover", function() {
                gridElement.style.backgroundColor = `rgba(0, 0, 0, ${0.1 * times})`;
                times++;
            }); 
        } else {
            // add event listener for default setting to change background to black
            gridElement.addEventListener("mouseover", function() {
                gridElement.style.backgroundColor = "black";
            });
        }
        grid.appendChild(gridElement);  // append the grid element after adding the appropriate event listener
    }
}

// changes the size of the grid
function setGridSize() {
    // Prompt for the grid size
    gridSize = parseInt(prompt("Please enter the desired grid size", "16"));

    if (Number.isNaN(gridSize)) {  // this for NaN and if someone hits cancel
        gridSize = 16;
    } else if (gridSize > 100) {  // check that the number is 100 or less
        alert("Your number must be less than 100!");
    } else if (gridSize < 1) {  // check that the number is greater than 0
        alert("Your grid must be greater than 0!");
    } else {  // change the grid with the new grid size
        resetGrid();
    }
}

// removes the grid elements
function clearGrid() {
    grid.innerHTML = "";
}

// used for the clear grid button to clear color from the grid
function resetGrid() {
    clearGrid();
    makeGrid(gridSize);
}

// sets the grid up for rainbow
function makeRainbow() {
    rainbow = true;
    shade = false;
    resetGrid();
}

// sets the grid back to the default settings
function makeDefault() {
    rainbow = false;
    shade = false;
    resetGrid();
}

// sets the grid up for shading
function makeShade() {
    rainbow = false;
    shade = true;
    resetGrid();
}

makeGrid(gridSize); // intializes the opening grid