const nav = document.querySelector(".nav");
const closeNav = document.querySelector(".close-nav-button");
const openNav = document.querySelector(".open-nav-button");

openNav.addEventListener("click", function(){
    nav.classList.add("nav-open")
    document.body.style.position="fixed"
})

closeNav.addEventListener("click", function(){
    nav.classList.remove("nav-open")
    document.body.style.position="initial"
})