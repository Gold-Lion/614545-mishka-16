var navMenu = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation__toggle");
var popup = document.querySelector(".modal");
var closeModal = document.querySelector(".overlay");
var slider = document.querySelector(".slider__item");
var sliderFirst = document.querySelector(".slider__item-first");
var sliderSecond = document.querySelector(".slider__item-second");
var btnSliderNext = document.querySelector(".slider__toggle--next");
var btnSliderPrev = document.querySelector(".slider__toggle--prev");
var modalTriggers = document.querySelectorAll(".js-modal");
var showModal = function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
  popup.classList.add("modal-apper");
  closeModal.classList.add("overlay--active");
}

for (var i = 0; i < modalTriggers.length; i++) {
  modalTriggers[i].addEventListener("click", showModal);
}

navMenu.classList.remove("navigation--nojs");

navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("navigation--opened");
});

closeModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
  closeModal.classList.remove("overlay--active");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && popup.classList.contains("modal__show")) {
    evt.preventDefault();
    popup.classList.remove("modal__show");
    closeModal.classList.remove("overlay--active");
  }
});

btnSliderPrev.addEventListener("click", function () {
  sliderFirst.classList.add("slider__item--active");
  sliderSecond.classList.remove("slider__item--active");
});

btnSliderNext.addEventListener("click", function () {
  sliderSecond.classList.add("slider__item--active");
  sliderFirst.classList.remove("slider__item--active");
});

document.addEventListener("DOMContentLoaded", function (event) {
  ymaps.ready(init);
  var map;
  function init() {
    map = new ymaps.Map("map", {
      center: [59.93944115603922, 30.32302403991186],
      zoom: 16,
      controls: ["zoomControl"]
    });
    var placemark = new ymaps.Placemark([59.938633647616214, 30.32304549758399], {}, {
      iconLayout: "default#image",
      iconImageHref: "../img/decor/icon-map-pin.svg",
      iconImageSize: [67, 100],
      iconImageOffset: [-33, -101]
    });
    map.behaviors.disable("scrollZoom"),
      map.geoObjects.add(placemark);
  }
});
