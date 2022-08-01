const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

mobileMenu.addEventListener("click", (e) => {
  body.classList.toggle("show-mobile-menu");
});
