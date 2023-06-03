let colors = ["red", "green", "blue"]

document.getElementById("btn-color").addEventListener("click", changeColor);

function changeColor() {
    let currentColor = document.body.style.background;
    let lastIndex = colors.length - 1
    let currentColorIndex = colors.indexOf(currentColor);
    if(currentColorIndex == lastIndex){
        document.body.style.background = colors[0];
    }else{
        document.body.style.background = colors[currentColorIndex + 1];
    }
    document.getElementById("color-desc").innerHTML = "Color: " + document.body.style.background;
}
