"use strict";

let bt = document.getElementById("button");

let btValider = document.getElementById("valider");
btValider.addEventListener("click",validation);
function validation(e){
    e.preventDefault();
    let nom = document.getElementById("nom").value;
    let mdp = document.getElementById("mdp").value;
    let mail = document.getElementById("mail").value;
    if(nom.length<3 && mdp.length<7){
        console.log("mot de passe ou nom trop court");
    }else{
        console.log("ça marche!");
    }
}
    
bt.addEventListener("click", darkMode);

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