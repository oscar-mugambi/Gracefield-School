const body = document.querySelector(".body");
const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".mobile-links");
const details = document.querySelector(".details");
const navItems = document.querySelectorAll(".nav-item");
const messageInfo = document.querySelector(".message");
const ghost = document.querySelector(".ghost");
const darken = document.querySelector(".darken");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  console.log("clicked");
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBtn.classList.add("show");
    details.classList.add("hide");
    messageInfo.classList.add("grey");
    darken.classList.add("dark");
    navItems.forEach((item) => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBtn.classList.remove("show");
    details.classList.remove("hide");
    darken.classList.remove("dark");
    messageInfo.classList.remove("grey");
    navItems.forEach((item) => item.classList.remove("show"));
    showMenu = false;
  }
}
