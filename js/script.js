//Проверяем на наличие формата WEBP==================================================================
function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
document.addEventListener('DOMContentLoaded', function () {
  let accordeonParrent = document.querySelector('.sidebar__accordeon'),
      accordeon = document.querySelectorAll('.sidebar__accordeon-item'),
      accordeonContent = document.querySelectorAll('.sidebar__accordeon-subtitle');
  document.querySelector('.header-bottom__list').addEventListener('click', function (e) {
    let target = e.target;
    document.querySelectorAll('.header-bottom__link').forEach((link, i) => {
      if (target == link) {
        link.classList.add('current-link');
      } else {
        link.classList.remove('current-link');
      }
    });
  });
  document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header-bottom').classList.toggle('active');
    document.querySelector('html').classList.toggle('lock');
    document.querySelector(".first__info").classList.toggle("active");
  });

  function hideContent() {
    accordeon.forEach(item => {
      item.classList.remove('active');
    });
    accordeonContent.forEach(item => {
      item.classList.remove('active');
    });
  }

  function showContent(i = 0) {
    accordeon[i].classList.add('active');
    accordeonContent[i].classList.add('active');
  }

  showContent();
  accordeonParrent.addEventListener('click', function (e) {
    let target = e.target;
    accordeon.forEach(function (item, i) {
      if (target == item) {
        hideContent();
        showContent(i);
      }
    });
  });
});
$(function () {
  $('[data-fancybox="gallery"]').fancybox();
  $("#phone").mask("(999) 999-9999");
  AOS.init({
    once: true
  });
});