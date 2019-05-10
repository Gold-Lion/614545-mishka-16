var navMenu = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation__toggle");
var popup = document.querySelector(".modal");
var btnOrder = document.querySelector(".btn__goods-main");
var closeModal = document.querySelector(".overlay");

navMenu.classList.remove("navigation--nojs");

navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("navigation--opened");
});

btnOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
  popup.classList.add("modal-apper");
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

document.addEventListener("DOMContentLoaded", function (event) {
  ymaps.ready(init); // активируем карту после загрузки страницы
  var map;
  function init() {
    map = new ymaps.Map("map", { // в кавычках id элемента куда загружается карта
      center: [59.93944115603922, 30.32302403991186],
      // координаты центра фрагмента карты, подобрать можно на https://vk.cc/9n163G
      zoom: 16,
      controls: ["zoomControl"]
    });
    var placemark = new ymaps.Placemark([59.938633647616214, 30.32304549758399], {}, { // координаты метки
      iconLayout: "default#image",
      iconImageHref: "../img/decor/icon-map-pin.svg", // иконка метки
      iconImageSize: [67, 100],
      iconImageOffset: [-33, -101]
    });
    map.behaviors.disable("scrollZoom"),
      map.geoObjects.add(placemark);
  }
});
