
const grid = document.querySelector(".grid");
const form = document.querySelector("form");
const replay = document.createElement("button");
replay.textContent = "Replay";
replay.style.marginTop = "16px";

function printGrid (size) {

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
         const smallDiv = document.createElement("div");
            smallDiv.style.cssText = "border: 0.5px solid gray; box-sizing: border-box";
            smallDiv.style.height = smallDiv.style.width = `${640/size}px`;
            grid.appendChild(smallDiv);
            smallDiv.addEventListener("mouseenter", () => {
             smallDiv.style.backgroundColor = "turquoise";
            })
        }
     
     }
}
function reset () {
    replay.addEventListener("click", (event) => {
        event.preventDefault();
        grid.innerHTML = "";
        printGrid(16);
    });
    form.appendChild(replay);
}

function colorPicker (elem) {
    elem.style.backgroundColor = `rgb`
 }


printGrid(16);

const btn = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    let size = parseInt(document.querySelector("#size").value);
    grid.innerHTML = "";
    printGrid(size);
    reset();
});







