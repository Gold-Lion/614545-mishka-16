var navMenu = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation__toggle");

navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("navigation--opened");
});
