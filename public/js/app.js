/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

//require('./bootstrap');
// Получаем необходимые элементы из DOM
var slider = document.querySelector('.slider');
var slides = document.querySelectorAll('.slide');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');
var pagination = document.querySelector('.pagination');
var currentIndex = 1; // Индекс текущего слайда
var timer; // Переменная для хранения интервального таймера

// Функция установки высоты слайдов равной высоте слайдера
function setSlideHeight() {
  var sliderHeight = slider.clientHeight; // Получаем высоту слайдера
  slides.forEach(function (slide) {
    slide.style.height = "".concat(sliderHeight, "px"); // Устанавливаем высоту каждого слайда
  });
}

// Функция для перехода к определенному слайду
function goToSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1; // Если индекс меньше 0, переходим к последнему слайду
  } else if (index >= slides.length) {
    currentIndex = 0; // Если индекс больше или равен количеству слайдов, переходим к первому слайду
  } else {
    currentIndex = index; // В противном случае переходим к указанному индексу
  }
  slider.style.transform = "translateY(-".concat(currentIndex * 100, "%)"); // Перемещаем слайдер
  updatePagination(); // Обновляем пагинацию
  clearInterval(timer); // Сбрасываем интервальный таймер
  timer = setInterval(nextSlide, 5000); // Запускаем таймер заново при ручном переключении слайдов
}

// Функция для перехода к следующему слайду
function nextSlide() {
  slides[currentIndex].style.opacity = 0; // Затемняем текущий слайд
  setTimeout(function () {
    slides[currentIndex].style.opacity = 1; // Возвращаем прозрачность текущему слайду
    goToSlide(currentIndex + 1); // Переходим к следующему слайду
  }, 100); // Добавляем задержку для анимации затемнения
}

// Функция для перехода к предыдущему слайду
function prevSlide() {
  slides[currentIndex].style.opacity = 0; // Затемняем текущий слайд
  setTimeout(function () {
    slides[currentIndex].style.opacity = 1; // Возвращаем прозрачность текущему слайду
    goToSlide(currentIndex - 1); // Переходим к предыдущему слайду
  }, 100); // Добавляем задержку для анимации затемнения
}

// Функция для обновления пагинации
function updatePagination() {
  pagination.innerHTML = ''; // Очищаем содержимое пагинации
  slides.forEach(function (slide, index) {
    var dot = document.createElement('span'); // Создаем точку для пагинации
    dot.classList.add('dot'); // Добавляем класс для точки
    if (index === currentIndex) {
      dot.classList.add('active'); // Если текущий слайд, добавляем класс для активной точки
    }
    dot.addEventListener('click', function () {
      clearInterval(timer); // Сбрасываем интервальный таймер при клике на точку
      goToSlide(index); // Переходим к выбранному слайду
    });
    pagination.appendChild(dot); // Добавляем точку в пагинацию
  });
}

// Обработчик клика на кнопку "назад"
prevBtn.addEventListener('click', function () {
  clearInterval(timer); // Сбрасываем интервальный таймер
  prevSlide(); // Вызываем функцию для перехода к предыдущему слайду
});

// Обработчик клика на кнопку "вперед"
nextBtn.addEventListener('click', function () {
  clearInterval(timer); // Сбрасываем интервальный таймер
  nextSlide(); // Вызываем функцию для перехода к следующему слайду
});

// Обработчик нажатия клавиш на клавиатуре
document.addEventListener('keydown', function (e) {
  clearInterval(timer); // Сбрасываем интервальный таймер
  if (e.key === 'ArrowLeft') {
    prevSlide(); // Если нажата клавиша влево, переходим к предыдущему слайду
  } else if (e.key === 'ArrowRight') {
    nextSlide(); // Если нажата клавиша вправо, переходим к следующему слайду
  }
});
updatePagination(); // Обновляем пагинацию при загрузке страницы
setSlideHeight(); // Устанавливаем высоту слайдов при загрузке страницы

timer = setInterval(nextSlide, 5000); // Устанавливаем интервальный таймер для автоматического переключения слайдов

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/my.scss":
/*!********************************!*\
  !*** ./resources/sass/my.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/my": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/my","css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/my","css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/my","css/app"], () => (__webpack_require__("./resources/sass/my.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;