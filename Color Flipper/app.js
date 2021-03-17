const colors = ['red' ,'orange','rgba(255,99,71)','#66ff66'];
const btn = document.getElementById("btn");
const colorName = document.querySelector(".color");

btn.addEventListener('click', function(){
    let RandomColor = getRandomColor();
    colorName.textContent = colors[RandomColor];
    document.body.style.backgroundColor = colors[RandomColor];
})

function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}