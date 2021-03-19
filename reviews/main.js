const review = [
    {
        id: 1,
        name: "Susan smith",
        job: "UI Developer",
        img:  "https://tse4.mm.bing.net/th?id=OIP.usFVFHHoHImk-1-6Cn6kigAAAA&pid=Api&P=0&w=300&h=300" ,
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Peter jones",
        job: "Front-End Developer",
        img:  "https://tse4.mm.bing.net/th?id=OIP.pg-WGE4DrYkR-6jNK-y8IgAAAA&pid=Api&P=0&w=300&h=300" ,
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Bill anderson",
        job: "Back-End Developer",
        img:  "https://tse3.mm.bing.net/th?id=OIP.z1g7jIJGLVJW1R0KgNGG6wHaHa&pid=Api&P=0&w=300&h=300" ,
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "Anna johnson",
        job: "Full Stack Developer",
        img:  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg" ,
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    }
  ];

  const image = document.getElementById("image");
  const name = document.getElementById("name");
  const job = document.getElementById("job");
  const about = document.getElementById("about");
  const prev = document.querySelector(".prev-btn");
  const next = document.querySelector(".next-btn");
  const random = document.querySelector(".random-btn");

  let currentItem = 0
  window.addEventListener("DOMContentLoaded",function(){
    image.src = image;
    name.textContent = name;
    job.textContent = job;
    about.textContent = about;
    showPerson();
  });

  function showPerson(){
      let item = review[currentItem];
      image.src = item.img;
      name.textContent = item.name;
      job.textContent = item.job;
      about.textContent = item.text;
  }

next.addEventListener("click",function(){
    currentItem++;
    if(currentItem > review.length - 1){
        currentItem = 0
    }
    showPerson();
})

prev.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = review.length - 1;
    }
    showPerson();
})

random.addEventListener("click",function(){
    currentItem = Math.floor(Math.random() * review.length);
    showPerson();
})