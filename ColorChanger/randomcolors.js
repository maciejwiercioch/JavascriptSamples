document.getElementById("btn-random-color").addEventListener("click", changeColorRandomly);

function changeColorRandomly() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    document.body.style.background = "#" + randomColor;
    document.getElementById("color-desc").innerHTML = "Color: " + document.body.style.background;
}