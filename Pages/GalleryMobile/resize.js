const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".mobile-links");
const shade = document.querySelector(".shade");
const container = document.querySelector(".container");
const galleries = document.querySelector(".galleries");
const navItems = document.querySelectorAll(".nav-item");
const carousel = document.querySelector(".carousel");
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
    galleries.style.display = "none";
    container.style.zIndex = -100;
    navItems.forEach((item) => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    container.style.zIndex = 100;
    menu.classList.remove("show");
    galleries.style.display = "";
    menuNav.classList.remove("show");
    menuBtn.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    showMenu = false;
  }
}

// function resize() {
//   console.log("height: ", window.innerHeight, "px");
//   console.log("width: ", window.innerWidth, "px");
// }
