const toggle = document.querySelector(".nav-toggle");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

toggle.addEventListener("click",function(){
    console.log(1);
    sidebar.classList.toggle("toggleContent");
})

close.addEventListener("click",function(){
    console.log(2)
    sidebar.classList.add("toggleContent");
})