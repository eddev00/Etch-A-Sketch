const container = document.querySelector(".container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");

    container.appendChild(cell).className = "grid-item";
  }
}

let trailing = () => {
  cells.forEach((cell) => {
    console.log("here");
    cell.addEventListener("mouseover", () => {
      console.log("here");
      cell.style.setProperty("background-color", "black");
    });
  });
};

makeRows(16, 16);
const cells = document.querySelectorAll(".grid-item");
console.log(cells);
trailing();
