var siteList = document.querySelector(".site-list");
var mainNavToggle = document.querySelector(".main-nav__toggle");
var form = document.querySelector(".feedback");
var modalError = document.querySelector(".modal--error");
var modalSuccess = document.querySelector(".modal--success");
var modalRequired = document.querySelectorAll("*:required");
var modalClose = document.querySelectorAll(".modal__close");
var modalOpen = "";

/* Открытие-закрытие меню навигации */
mainNavToggle.addEventListener("click", function() {
  mainNavToggle.classList.toggle("main-nav__toggle--opened");
  siteList.classList.toggle("site-list--opened");
});

siteList.classList.remove("site-list--nojs");
mainNavToggle.classList.remove("main-nav__toggle--nojs");

/* Обработка отправки формы и закрытия модальных окон */

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  var hasEmptyField = false;

  modalRequired.forEach(function(item, i, arr) {
    if (!item.value) {
      hasEmptyField = true;
    }
  });

  if (hasEmptyField) {
    modalError.classList.add("modal--open");
    modalOpen = modalError;
  } else {
    modalSuccess.classList.add("modal--open");
    modalOpen = modalSuccess;
  }
});

modalClose.forEach(function(item, i, arr) {
  item.addEventListener("click", function(evt) {
    modalOpen.classList.remove("modal--open");
  });
});
