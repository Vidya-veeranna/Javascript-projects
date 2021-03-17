const colors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.getElementById("btn");
const colorName = document.querySelector(".color");

btn.addEventListener("click",function(){
    let hexcolor = '#';
    for(let i=0;i<6;i++){
        hexcolor += colors[getRandomColor()];
    }
    document.body.style.backgroundColor = hexcolor;
    colorName.textContent = hexcolor;
})

function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}