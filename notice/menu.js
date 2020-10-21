const body = document.querySelector(".body");
const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".mobile-links");

const navItems = document.querySelectorAll(".nav-item");

const ghost = document.querySelector(".ghost");
const darken = document.querySelector(".darken");
document.body.style.zoom = "100%";
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  console.log("clicked");
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBtn.classList.add("show");

    darken.classList.add("dark");
    navItems.forEach((item) => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBtn.classList.remove("show");

    darken.classList.remove("dark");

    navItems.forEach((item) => item.classList.remove("show"));
    showMenu = false;
  }
}
