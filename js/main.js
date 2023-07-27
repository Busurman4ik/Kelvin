let navBtn = document.querySelector(".nav__btn");
let nav = document.querySelector(".nav");
let body = document.querySelector("body")


navBtn.addEventListener("click", function() {
    nav.classList.toggle("active");
    navBtn.classList.toggle('active');
    body.classList.toggle('unscroll');
})

AOS.init();