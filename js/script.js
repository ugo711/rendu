"use strict";

let button=document.querySelector("#button");
button.addEventListener("click",darkMode);

let swiper = new Swiper(".mySwiper", {
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

function darkMode(){
    let body=document.querySelector("body");    
    if(body.style.background=="black"){
        body.style.background="white";
        body.style.color="black";
    }else{
        body.style.background="black";
        body.style.color="white";
    }
}