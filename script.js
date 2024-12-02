
const grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
   for (let j = 0; j < 16; j++) {
    const smallDiv = document.createElement("div");
       smallDiv.style.cssText = "border: 0.5px solid gray; height: 40px; width: 40px; box-sizing: border-box;";
       grid.appendChild(smallDiv);
       smallDiv.addEventListener("mouseenter", () => {
        smallDiv.style.backgroundColor = "lightpink";
       });
    }
}





