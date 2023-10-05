/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const button = document.createElement('button')
const modal = document.getElementById('myModal')
const close = document.getElementsByClassName('close')[0]

function createButton(){
    const banner = document.createElement('div')
    const title = document.createElement('div')
    title.textContent = 'Vsa opravila'
    banner.classList.add('banner')
    button.classList.add('add')
    button.setAttribute('id','openModal')
    title.classList.add('title')
    button.textContent = '+ Dodaj novo opravilo'

    banner.appendChild(title)
    banner.appendChild(button)

    return banner
}
function loadButton(){
    const main = document.getElementById('main')
    main.appendChild(createButton())
}

button.addEventListener('click', (e) => {
    modal.style.display = 'block'
})
close.addEventListener('click', (e) => {
    modal.style.display = 'none'
})
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
})
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadButton);

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader() {
    const header = document.createElement('div')
    header.classList.add('header')

    const logo = document.createElement('img')
    logo.classList.add('logo')
    logo.src = './header-logo_imp_int.png'

    const signIn = document.createElement('button')
    signIn.classList.add('signIn')
    signIn.textContent = 'Vpiši me'

    header.appendChild(logo)
    header.appendChild(signIn)
    return header
}
function loadHeader(){
    const main = document.getElementById('main')

    main.appendChild(createHeader())
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);


/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
    constructor(title, desc, author, priority){
        this.title = title
        this.desc = desc
        this.author = author
        this.priority = priority
    }
    createNew(){
        const todo = {
            title:this.title,
            desc:this.desc,
            author:this.author,
            priority:this.priority
        }
        return todo
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/todoTable.js":
/*!**************************!*\
  !*** ./src/todoTable.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRow: () => (/* binding */ createRow),
/* harmony export */   loadTable: () => (/* binding */ loadTable)
/* harmony export */ });
const table = document.createElement('table')
const thead = document.createElement('thead')
const tbody = document.createElement('tbody')

function createTable(){
    
    const tr = document.createElement('tr')
    const trTitle = document.createElement('th')
    trTitle.textContent = 'Naslov'
    const trDesc = document.createElement('th')
    trDesc.textContent = 'Opis'
    const trAuthor = document.createElement('th')
    trAuthor.textContent = 'Avtor'
    const trPrio = document.createElement('th')
    trPrio.textContent = 'Prioriteta'

    tr.appendChild(trTitle)
    tr.appendChild(trDesc)
    tr.appendChild(trAuthor)
    tr.appendChild(trPrio)
    thead.appendChild(tr)
    table.appendChild(thead)
    table.appendChild(tbody)
    return table
}
function createRow(todos){
    tbody.textContent = ''

    todos.forEach(element => {
        const row = insertRow(element)
        tbody.appendChild(row)
    })
}

function insertRow(todo){
    const row = document.createElement('tr')
    const tdTitle = document.createElement('td')
    tdTitle.textContent = todo.title
    const tdDesc = document.createElement('td')
    tdDesc.textContent = todo.desc
    const tdAuthor = document.createElement('td')
    tdAuthor.textContent = todo.author
    const tdPrio = document.createElement('td')
    tdPrio.textContent = todo.priority

    row.appendChild(tdTitle)
    row.appendChild(tdDesc)
    row.appendChild(tdAuthor)
    row.appendChild(tdPrio)

    return row
}

function loadTable(){
    const main = document.getElementById('main')

    main.appendChild(createTable())
}


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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todos: () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.js */ "./src/button.js");
/* harmony import */ var _todoTable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoTable.js */ "./src/todoTable.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");





const content = document.getElementById('content')
const todos = []

function createMain(){
    const main = document.createElement('div')
    main.setAttribute('id','main')

    return main
}

function addToList(title, desc, author, priority){
    const todo = new _todoList_js__WEBPACK_IMPORTED_MODULE_3__["default"](title, desc, author, priority)
    const newT = todo.createNew()
    todos.push(newT)
    ;(0,_todoTable_js__WEBPACK_IMPORTED_MODULE_2__.createRow)(todos)
}

content.appendChild(createMain())
;(0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_button_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
;(0,_todoTable_js__WEBPACK_IMPORTED_MODULE_2__.loadTable)()
addToList('test','test','test','1')



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ25DZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ3JCekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDQTtBQUNpQjtBQUNyQjs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixvREFBSTtBQUN6QjtBQUNBO0FBQ0EsSUFBSSx5REFBUztBQUNiOztBQUVBO0FBQ0EsdURBQVU7QUFDVix1REFBVTtBQUNWLHlEQUFTO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG9UYWJsZS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJylcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xvc2UnKVswXVxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24oKXtcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdWc2Egb3ByYXZpbGEnXG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZCcpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdvcGVuTW9kYWwnKVxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnKyBEb2RhaiBub3ZvIG9wcmF2aWxvJ1xuXG4gICAgYmFubmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGJhbm5lci5hcHBlbmRDaGlsZChidXR0b24pXG5cbiAgICByZXR1cm4gYmFubmVyXG59XG5mdW5jdGlvbiBsb2FkQnV0dG9uKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbigpKVxufVxuXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG59KVxuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn0pXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGxvYWRCdXR0b24iLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcblxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpXG4gICAgbG9nby5zcmMgPSAnLi9oZWFkZXItbG9nb19pbXBfaW50LnBuZydcblxuICAgIGNvbnN0IHNpZ25JbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc2lnbkluLmNsYXNzTGlzdC5hZGQoJ3NpZ25JbicpXG4gICAgc2lnbkluLnRleHRDb250ZW50ID0gJ1ZwacWhaSBtZSdcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzaWduSW4pXG4gICAgcmV0dXJuIGhlYWRlclxufVxuZnVuY3Rpb24gbG9hZEhlYWRlcigpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKVxufVxuZXhwb3J0IGRlZmF1bHQgbG9hZEhlYWRlclxuIiwiY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2MsIGF1dGhvciwgcHJpb3JpdHkpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzY1xuICAgICAgICB0aGlzLmF1dGhvciA9IGF1dGhvclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB9XG4gICAgY3JlYXRlTmV3KCl7XG4gICAgICAgIGNvbnN0IHRvZG8gPSB7XG4gICAgICAgICAgICB0aXRsZTp0aGlzLnRpdGxlLFxuICAgICAgICAgICAgZGVzYzp0aGlzLmRlc2MsXG4gICAgICAgICAgICBhdXRob3I6dGhpcy5hdXRob3IsXG4gICAgICAgICAgICBwcmlvcml0eTp0aGlzLnByaW9yaXR5XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvZG9cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG8iLCJjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJylcbmNvbnN0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKVxuY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlKCl7XG4gICAgXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gICAgY29uc3QgdHJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJylcbiAgICB0clRpdGxlLnRleHRDb250ZW50ID0gJ05hc2xvdidcbiAgICBjb25zdCB0ckRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpXG4gICAgdHJEZXNjLnRleHRDb250ZW50ID0gJ09waXMnXG4gICAgY29uc3QgdHJBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpXG4gICAgdHJBdXRob3IudGV4dENvbnRlbnQgPSAnQXZ0b3InXG4gICAgY29uc3QgdHJQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKVxuICAgIHRyUHJpby50ZXh0Q29udGVudCA9ICdQcmlvcml0ZXRhJ1xuXG4gICAgdHIuYXBwZW5kQ2hpbGQodHJUaXRsZSlcbiAgICB0ci5hcHBlbmRDaGlsZCh0ckRlc2MpXG4gICAgdHIuYXBwZW5kQ2hpbGQodHJBdXRob3IpXG4gICAgdHIuYXBwZW5kQ2hpbGQodHJQcmlvKVxuICAgIHRoZWFkLmFwcGVuZENoaWxkKHRyKVxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRoZWFkKVxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KVxuICAgIHJldHVybiB0YWJsZVxufVxuZnVuY3Rpb24gY3JlYXRlUm93KHRvZG9zKXtcbiAgICB0Ym9keS50ZXh0Q29udGVudCA9ICcnXG5cbiAgICB0b2Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBpbnNlcnRSb3coZWxlbWVudClcbiAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQocm93KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGluc2VydFJvdyh0b2RvKXtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gICAgY29uc3QgdGRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcbiAgICB0ZFRpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZVxuICAgIGNvbnN0IHRkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcbiAgICB0ZERlc2MudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NcbiAgICBjb25zdCB0ZEF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcbiAgICB0ZEF1dGhvci50ZXh0Q29udGVudCA9IHRvZG8uYXV0aG9yXG4gICAgY29uc3QgdGRQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuICAgIHRkUHJpby50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHlcblxuICAgIHJvdy5hcHBlbmRDaGlsZCh0ZFRpdGxlKVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0ZERlc2MpXG4gICAgcm93LmFwcGVuZENoaWxkKHRkQXV0aG9yKVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0ZFByaW8pXG5cbiAgICByZXR1cm4gcm93XG59XG5cbmZ1bmN0aW9uIGxvYWRUYWJsZSgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVRhYmxlKCkpXG59XG5leHBvcnQge2xvYWRUYWJsZSwgY3JlYXRlUm93fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRIZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnXG5pbXBvcnQgbG9hZEJ1dHRvbiBmcm9tICcuL2J1dHRvbi5qcydcbmltcG9ydCB7IGxvYWRUYWJsZSwgY3JlYXRlUm93IH0gZnJvbSAnLi90b2RvVGFibGUuanMnXG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG9MaXN0LmpzJ1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuY29uc3QgdG9kb3MgPSBbXVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywnbWFpbicpXG5cbiAgICByZXR1cm4gbWFpblxufVxuXG5mdW5jdGlvbiBhZGRUb0xpc3QodGl0bGUsIGRlc2MsIGF1dGhvciwgcHJpb3JpdHkpe1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzYywgYXV0aG9yLCBwcmlvcml0eSlcbiAgICBjb25zdCBuZXdUID0gdG9kby5jcmVhdGVOZXcoKVxuICAgIHRvZG9zLnB1c2gobmV3VClcbiAgICBjcmVhdGVSb3codG9kb3MpXG59XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKVxubG9hZEhlYWRlcigpXG5sb2FkQnV0dG9uKClcbmxvYWRUYWJsZSgpXG5hZGRUb0xpc3QoJ3Rlc3QnLCd0ZXN0JywndGVzdCcsJzEnKVxuXG5cbmV4cG9ydCB7IHRvZG9zIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=