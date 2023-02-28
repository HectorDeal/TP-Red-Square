// let button = document.getElementById('toggleRedSquare')
// let activate = document.querySelector('.redsquare-app')
// let attribut = document.querySelector('.redsquare-controls button' )
// let rocket = document.querySelector('.square')
// let scaleUp = document.querySelector('#scaleUp')
// let scaleDown = document.querySelector('#scaleDown')

// button.addEventListener('click',function(){
//     activate.classList.toggle("is-active")
//     attribut.toggleAttribute('disabled')
// })

// scaleUp.addEventListener('click',function() {
//     var width = rocket.clientWidth
//     var height = rocket.clientHeight
//     rocket.style.width = (width + 20) + "px";
//     rocket.style.height = (height + 20) + "px";
// })

// scaleDown.addEventListener('click',function() {
//     var width = rocket.clientWidth
//     var height = rocket.clientHeight
//     if (rocket.style.width)
//     rocket.style.width = (width - 20) + "px";
//     rocket.style.height = (height - 20) + "px";
// })













// Déclaration de variables

let switch1 = document.querySelector(".form-check-input")
console.log(switch1)
let div = document.querySelector(".redsquare-app")
let rocket = document.querySelector(".square")
let buttons = document.querySelectorAll(".redsquare-controls button")
let scaleUp = document.querySelector("#scaleUp")
let scaleDown = document.querySelector('#scaleDown')
let shapeCircle = document.querySelector('#shapeCircle')
let shapeSquare = document.querySelector('#shapeSquare')

// Ajouter supprimer des classes

switch1.addEventListener('click',function() {
    for (const button of buttons) {
        if (button.hasAttribute('disabled') == true) {
            div.classList.add("is-active")
            button.removeAttribute("disabled")
            button.classList.remove("btn-light")
            button.classList.add("btn-primary")
        }
        else {
            div.classList.remove("is-active")
            button.setAttribute("disabled",'')
            button.classList.remove("btn-primary")
            button.classList.add("btn-light")
        }
    }
})

scaleUp.addEventListener('click',function() {
    var width = rocket.clientWidth
    var height = rocket.clientHeight
    rocket.style.width = (width + 20) + "px";
    rocket.style.height = (height + 20) + "px";
})

scaleDown.addEventListener('click',function() {
    var width = rocket.clientWidth
    var height = rocket.clientHeight
    if (width > 40) {
        rocket.style.width = (width - 20) + "px";
        rocket.style.height = (height - 20) + "px";
    }
})

shapeCircle.addEventListener('click',function(){
    rocket.style.borderRadius = 100 + "px";
})
shapeSquare.addEventListener('click',function(){
    rocket.style.borderRadius = 0 + "px";
})


// function movearound(thisway){ 

// position[0] = parseInt(document.querySelector('rocket').style.top);
// position[1] = parseInt(document.querySelector('rocket').style.left); 
// switch(thisway){

// case "up":
// position[0] -= 2;
// break;

// case "do":
// position[0] += +2;
// break;

// case "le":
// position[1] -= 2;
// break;

// case "ri":
// position[1] += +2;
// break;
// }

// document.querySelector('rocket').style.top = Number(position[0]); 
// document.querySelector('rocket').style.left = Number(position[1]);
// }