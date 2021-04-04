const btnOpen = document.getElementById("btn-open")
const btnClose = document.getElementById("btn-close")
const modalOverlay = document.querySelector(".modal-overlay")

btnOpen.addEventListener("click",function(){
    console.log("opened")
    modalOverlay.classList.add("modal-open")
})

btnClose.addEventListener("click",function(){
    console.log("closed")
    modalOverlay.classList.remove("modal-open")
})