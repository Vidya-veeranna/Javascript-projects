const questions = document.querySelectorAll(".question")

questions.forEach(function(question){
    const btn = question.querySelector(".btn");
    btn.addEventListener("click",function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text");
    })
})


/*const btns = document.querySelectorAll(".btn")

btns.forEach(function(btn){
    console.log(btn)
    btn.addEventListener("click",function(e){
        const question = e.currentTarget.parentElement;
        question.classList.toggle("show-text")
    })
})*/