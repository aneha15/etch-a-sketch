
const grid = document.querySelector(".grid");
const form = document.querySelector("form");

function printGrid (size) {

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
         const smallDiv = document.createElement("div");
            smallDiv.style.cssText = "border: 0.5px solid gray; box-sizing: border-box";
            smallDiv.style.height = smallDiv.style.width = `${640/size}px`;
            grid.appendChild(smallDiv);
            smallDiv.addEventListener("mouseenter", () => {
             smallDiv.style.backgroundColor = "lightpink";
            });
        }
     
     }
}


const btn = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    let size = parseInt(document.querySelector("#size").value);
    printGrid(size);
    const replay = document.createElement("button");
    replay.textContent = "Replay";
    replay.style.marginTop = "16px";
    form.appendChild(replay);
    replay.addEventListener("click", () => {
        location.reload();
    })
});







