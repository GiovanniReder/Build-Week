const buttonStars = document.querySelectorAll(".starsClass");
const allStars = [];

buttonStars.forEach(star => {
    allStars.push(star);
    star.onclick = event => {
        allStars.forEach(s => {
            s.classList.remove("newStarsClass");
        });
        for (let i = 0; i <= allStars.indexOf(star); i++) {
            allStars[i].classList.add("newStarsClass");
        }
    };
});
