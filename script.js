
const grid = document.querySelector(".grid");
const form = document.querySelector("form");
const replay = document.createElement("button");
const input = document.querySelector("input");
input.style.height = "30px";
const button = document.querySelector("button");
button.style.height = "26px";
button.style.fontSize = "18px";
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
             smallDiv.style.backgroundColor = colorPicker(smallDiv);
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
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);

    elem.style.backgroundColor = `rgb(${x} , ${y}, ${z})`;

 }


printGrid(16);

const btn = document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    let size = parseInt(document.querySelector("#size").value);
    grid.innerHTML = "";
    printGrid(size);
    reset();
});







