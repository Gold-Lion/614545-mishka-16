var navMenu = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation__toggle");
var popup = document.querySelector(".modal");
var btnOrder = document.querySelector(".btn__goods-main");
var closeModal = document.querySelector(".overlay");

navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("navigation--opened");
});

btnOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
  closeModal.classList.add("overlay--active");
});

closeModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
  closeModal.classList.remove("overlay--active");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal__show")) {
			evt.preventDefault();
			popup.classList.remove("modal__show");
			closeModal.classList.remove("overlay--active");
		}
	}
});
