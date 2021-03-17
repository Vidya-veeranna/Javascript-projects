const number = document.querySelector(".number");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const style = e.currentTarget.classList;
        if (style.contains("increase")){
            count++;
        }
        else if (style.contains("decrease")){
            count--;
        }
        else{
            count=0;
        }
        if (count > 0) {
            number.style.color = "green";
        }
        else if (count < 0) {
            number.style.color = "red";
        }
        else if (count == 0) {
                number.style.color = "black";
        }
        number.textContent = count;
    })
})