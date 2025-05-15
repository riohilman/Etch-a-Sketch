const container = document.querySelector("#container");
const button = document.querySelector("#change-grid");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.setAttribute("class", "box");
    grid.style.width = `${600 / 16}px`;
    grid.style.height = `${600 / 16}px`;
    container.appendChild(grid);

    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = getRandomColor();
    })
}   

button.addEventListener("click", () => {
    let side;
    do {
        side = parseInt(prompt("How many squares per side? (1–100)"));
    } while (isNaN(side) || side < 1 || side > 100);
    
    container.innerHTML = "";
    const boxSize = 600 / side;
    for (let i = 0; i < side*side; i++) {
        const grid = document.createElement("div");
        grid.setAttribute("class", "box");
        grid.style.width = `${boxSize}px`;
        grid.style.height = `${boxSize}px`;
        container.appendChild(grid);
    
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = getRandomColor();
        })
    }        
});
