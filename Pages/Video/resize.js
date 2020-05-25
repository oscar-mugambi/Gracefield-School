const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".mobile-links");
const video = document.querySelector(".video");
const column = document.querySelector(".column");

const navItems = document.querySelectorAll(".nav-item");

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
    video.style.zIndex = -100;
    column.style.zIndex = 100;
    navItems.forEach((item) => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    column.style.zIndex = -100;
    menu.classList.remove("show");
    video.style.zIndex = 100;
    menuNav.classList.remove("show");
    menuBtn.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    showMenu = false;
  }
}
