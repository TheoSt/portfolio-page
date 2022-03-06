const spans = document.querySelectorAll(".intro-info span");
const cards = document.querySelectorAll(".card");
const cardMessage = document.querySelector(".message");

const transit = (i) => {
    setTimeout(function() {
        spans[i].classList.toggle("intro-transition");
    },400*i);
}


spans.forEach((span,index)=>transit(index))

cards.forEach(c=> {
    c.addEventListener("click",cardRotate);
});

cardMessage.addEventListener("click",cardRotate);


function cardRotate() {
    cardMessage.classList.add("hide-message");
    return (this==cards[0] || this==cardMessage) ? cards[0].classList.toggle("active-rotate"):this.classList.toggle("active-rotate");
}

