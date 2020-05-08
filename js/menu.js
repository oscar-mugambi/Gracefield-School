const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".mobile-links");
const details = document.querySelector(".details");
const navItems = document.querySelectorAll(".nav-item");
const messageInfo = document.querySelector(".message");
const ghost = document.querySelector(".ghost");

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
    details.classList.add("hide");
    messageInfo.classList.add("grey");
    navItems.forEach((item) => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBtn.classList.remove("show");
    details.classList.remove("hide");
    messageInfo.classList.remove("grey");
    navItems.forEach((item) => item.classList.remove("show"));
    showMenu = false;
  }
}
