const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

mobileMenu.addEventListener("click", (e) => {
  body.classList.toggle("show-mobile-menu");
});

function animate() {
  const elements = document.querySelectorAll(".animate");
  elements.forEach((element) => {
    let windowHeight = window.innerHeight;
    const positionFromTop = element.getBoundingClientRect().top;
    let elementVisible = 150;
    if (positionFromTop < windowHeight - elementVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", animate);
