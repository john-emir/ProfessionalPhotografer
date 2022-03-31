let iconMenu = document.querySelector(".menu__icon");
let Menuicon = document.querySelector(".icon-menu");
let menuBody = document.querySelector(".menu__body");


iconMenu.onclick = function () {
    Menuicon.classList.toggle("_active")
    menuBody.classList.toggle("_active")
}

console.log(Menuicon)


let taitel = document.querySelector(".main-home__taitel")
let text = document.querySelector(".main-home__text")


window.onload = function(){
    taitel.classList.add("_load")
    text.classList.add("_load")

}