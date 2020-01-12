var siteList = document.querySelector(".site-list");
var mainNavToggle = document.querySelector(".main-nav__toggle");

mainNavToggle.addEventListener("click", function() {
  mainNavToggle.classList.toggle("main-nav__toggle--opened");
  siteList.classList.toggle("site-list--opened");
});

siteList.classList.remove("site-list--nojs");
mainNavToggle.classList.remove("main-nav__toggle--nojs");
