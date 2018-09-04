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
