const spans = document.querySelectorAll(".intro-info span");
const cards = document.querySelectorAll(".card");
const cardMessage = document.querySelector(".message");
const typewriter = document.querySelector(".typewrite");

const transit = (i) => {
    setTimeout(function() {
        spans[i].classList.toggle("intro-transition");
    },400*i);
}

spans.forEach((span,index)=>transit(index))

document.addEventListener("scroll",function() {
    const isIn = isInViewport(typewriter);
    if(isIn && !typewriter.classList.contains("start-anim")) typewriter.classList.add("start-anim");
})

cards.forEach(card=> {
    card.addEventListener("click",cardRotate);
});

cardMessage.addEventListener("click",cardRotate);



function cardRotate() {
    cardMessage.classList.add("hide-message");
    return (this==cards[0] || this==cardMessage) ? cards[0].classList.toggle("active-rotate"):this.classList.toggle("active-rotate");
}

function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();

    return (
        rect.top >=0 && 
        rect.left >= 0 && 
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

