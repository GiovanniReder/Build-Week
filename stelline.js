
const starContainer = document.querySelector(".starRating");
const totalStars = 10;
  
for (let i = 0; i < totalStars; i++) {
    const starImg = document.createElement("img");
    starImg.className = "star";
    starImg.src = "assets/images/star.svg"; 
    starContainer.appendChild(starImg);
}

starContainer.addEventListener("click", function(){
    const star = document.querySelector(".star")
    console.log(star)
    star.style = "fill:white"
        
})


  

  