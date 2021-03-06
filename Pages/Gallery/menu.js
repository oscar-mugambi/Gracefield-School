const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".mobile-links");
const shade = document.querySelector(".shade");
const container = document.querySelector(".container");
const galleries = document.querySelector(".galleries");
const navItems = document.querySelectorAll(".nav-item");
const carousel = document.querySelector(".carousel-responsive");
const imageResponsive = document.querySelector(".image-responsive");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
menuBtn.addEventListener("click", console.log("clicked"));

function toggleMenu() {
  console.log("clicked");
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBtn.classList.add("show");
    container.style.zIndex = -100;
    galleries.style.display = "none";
    navItems.forEach((item) => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    galleries.style.display = "";
    menuBtn.classList.remove("show");
    container.style.zIndex = 100;
    navItems.forEach((item) => item.classList.remove("show"));
    showMenu = false;
  }
}
console.log(imageResponsive.style.width);

window.addEventListener("load", (event) => {
  let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  let height = width / 1.69;
  if (width < 600) {
    carousel.style.width = width + "px";
    carousel.style.height = height + "px";
    imageResponsive.style.width = width + "px";
    imageResponsive.style.height = height + "px";
    window.onresize = resize;
  }
});

function resize() {
  console.log("height: ", window.innerHeight, "px");
  console.log("width: ", window.innerWidth, "px");
}
