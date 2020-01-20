var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var overlay = document.querySelector(".modal-overlay");

var isStorageSupport = true;
var storage = "";

// Проверка доступности LocalStorage
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

// Открытие модального окна ЛогинаПароля
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-overlay-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

// Закрытие модального окна ЛогинаПароля по крестику
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-overlay-show");
});

// Закрытие модального окна ЛогинаПароля по клавише ESC
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("modal-overlay-show");
      evt.preventDefault();
    }
  }
});

// Проверка валидности формы перед её отправкой
form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

var mapLink = document.querySelector(".js-button-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

// Открытие модального окна с картой
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
  overlay.classList.add("modal-overlay-show");
});

// закрытие окна с картой и оверлея при нажатии на крестик
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-overlay-show");
});

// закрытие окна с картой и оверлея при нажатии на ESC
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
      overlay.classList.remove("modal-overlay-show");
      evt.preventDefault();
    }
  }
});

// Клик по оверлею скрывает модальное окно и оверлей
overlay.addEventListener("click", function (evt) {
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
  }
  if (mapPopup.classList.contains("modal-show")) {
    mapPopup.classList.remove("modal-show");
  }
  overlay.classList.remove("modal-overlay-show");
});