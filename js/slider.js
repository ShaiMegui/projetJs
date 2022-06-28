// creation of the slider

let count = 0;
let timer, elements, slides, slideWith;
let image = document.querySelectorAll(".image");
let active = true;
let index = 0;

const diapo = document.querySelector(".container-slide-images");
elements = document.querySelector(".all-image");
console.log(diapo);

//clone the 1st image
let firstImage = elements.firstElementChild.cloneNode(true);
console.log(firstImage);
elements.appendChild(firstImage);



//slide

slides = Array.from(elements.children);
slideWith = elements.getBoundingClientRect().width
console.log(slides);


//to take the arrow right

let arrowR = document.querySelector(".fa-arrow-right")
console.log(arrowR);
arrowR.addEventListener("click", slideNext);

//arrow left 
let arrowL = document.querySelector(".fa-arrow-left");
arrowL.addEventListener("click", slidePrev);


function slideNext() {
    count++;
    elements.style.transition = "1s linear";
    let decal = -slideWith * count;
    elements.style.transform = `translateX(${decal}px)`;

    //on attend la fin de la transition
    setTimeout(function () {
        if (count >= slides.length - 1) {
            count = 0;
            elements.style.transition = "unset";
            elements.style.transform = "translateX(0%)";
        }
    }, 1000);



}


function slidePrev() {
    count--;
    elements.style.transition = "1s linear";
    //on attend la fin de la transition
    if (count < 0) {
        count = slides.length - 1;
        let decal = -slideWith * count;
        elements.style.transition = "unset";
        elements.style.transform = `translateX(${decal}px)`;
        setTimeout(slidePrev, 1);
    }
    let decal = -slideWith * count;
    elements.style.transform = `translateX(${decal}px)`;

}