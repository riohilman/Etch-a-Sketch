const container = document.querySelector("#container");
const button = document.querySelector("#change-grid");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(side) {
    container.innerHTML = "";
    const boxSize = 600 / side;

    for (let i = 0; i < side * side; i++) {
        const grid = document.createElement("div");
        grid.setAttribute("class", "box");
        grid.style.width = `${boxSize}px`;
        grid.style.height = `${boxSize}px`;

        grid.dataset.opacity = 0;
        grid.dataset.colored = "false";
        container.appendChild(grid);

        grid.addEventListener("mouseover", () => {
            let opacity = parseFloat(grid.dataset.opacity);
            if (opacity < 1) {
                opacity += 0.1;
                grid.dataset.opacity = opacity;

                if (grid.dataset.colored === "false") {
                    const color = getRandomColor();
                    grid.style.backgroundColor = color;
                    grid.dataset.color = color;
                    grid.dataset.colored = "true";
                }

                const baseColor = grid.dataset.color;
                grid.style.backgroundImage = `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity}))`;
                grid.style.backgroundBlendMode = "multiply";
                grid.style.backgroundColor = baseColor;
            }
        });
    }
}

createGrid(16);

button.addEventListener("click", () => {
    let side;
    do {
        side = parseInt(prompt("How many squares per side? (1–100)"));
    } while (isNaN(side) || side < 1 || side > 100);

    createGrid(side);
});
