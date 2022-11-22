const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});
