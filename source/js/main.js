var header = document.querySelector(".header__navigation-mask");
var header_toggle = document.querySelector(".toggle__label");

header.classList.remove("header__navigation-mask--active");

header_toggle.addEventListener("click", function(evt) {
  // console.log(111)
  // evt.stopPropagation();
  if (header.classList.contains("header__navigation-mask--active")) {
    header.classList.remove("header__navigation-mask--active");
  } else {
    header.classList.add("header__navigation-mask--active");
  }
});

var modal_button = document.querySelector(".video__button");
var modal = document.querySelector(".video__modal");
var modal_close_button = document.querySelector(".video__close-button");

modal_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("video__modal--active");
});

modal_close_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("video__modal--active");
  document.querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
});


// плавная прокрутка

new SmoothScroll("a[href*='#']");
