(self["webpackChunktask_1"] = self["webpackChunktask_1"] || []).push([["body"],{

/***/ "./modules/body/body.js":
/*!******************************!*\
  !*** ./modules/body/body.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.css */ "./modules/body/body.css");
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_body_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);




jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').append('<button>Click here to get started</button>');
jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').append('<p id="count"></p>');


let counter = 0;

function updateCounter(){
	counter ++;
	jquery__WEBPACK_IMPORTED_MODULE_1___default()("#count").html('${counter} clicks on the button');
}

jquery__WEBPACK_IMPORTED_MODULE_1___default()('button').on('click', lodash__WEBPACK_IMPORTED_MODULE_2___default().debounce(updateCounter, 500));

/***/ }),

/***/ "./modules/body/body.css":
/*!*******************************!*\
  !*** ./modules/body/body.css ***!
  \*******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nCssSyntaxError\n\n(2:7) C:\\Users\\ADMIN\\Documents\\alx-react\\0x00-Webpack\\task_3\\modules\\body\\body.css Unknown word\n\n \u001b[90m 1 | \u001b[39m\n\u001b[1m\u001b[31m>\u001b[39m\u001b[22m\u001b[90m 2 | \u001b[39m      import API from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m      \u001b[1m\u001b[31m^\u001b[39m\u001b[22m\n \u001b[90m 3 | \u001b[39m      import domAPI from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/styleDomAPI.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39m      import insertFn from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/insertBySelector.js\"\u001b[39m\u001b[33m;\u001b[39m\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_lodash_js"], () => (__webpack_exec__("./modules/body/body.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQjtBQUNHO0FBQ0E7QUFDdkI7QUFDQSw2Q0FBQztBQUNELDZDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw2Q0FBQyxtQkFBbUIsU0FBUztBQUM5QjtBQUNBO0FBQ0EsNkNBQUMsdUJBQXVCLHNEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza18xLy4vbW9kdWxlcy9ib2R5L2JvZHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2JvZHkuY3NzJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbiQoJ2JvZHknKS5hcHBlbmQoJzxidXR0b24+Q2xpY2sgaGVyZSB0byBnZXQgc3RhcnRlZDwvYnV0dG9uPicpO1xyXG4kKCdib2R5JykuYXBwZW5kKCc8cCBpZD1cImNvdW50XCI+PC9wPicpO1xyXG5cclxuXHJcbmxldCBjb3VudGVyID0gMDtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXIoKXtcclxuXHRjb3VudGVyICsrO1xyXG5cdCQoXCIjY291bnRcIikuaHRtbCgnJHtjb3VudGVyfSBjbGlja3Mgb24gdGhlIGJ1dHRvbicpO1xyXG59XHJcblxyXG4kKCdidXR0b24nKS5vbignY2xpY2snLCBfLmRlYm91bmNlKHVwZGF0ZUNvdW50ZXIsIDUwMCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==