require("source-map-support").install();
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);

const port = process.env.PORT || 3001;
const cors = __webpack_require__(/*! cors */ "cors");
const corsOptions = {
    credentials: true,
    origin: (origin, callback) => {
        callback(null, origin);
    },
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "OPTIONS"],
};
let app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express__WEBPACK_IMPORTED_MODULE_0___default().json({
    limit: "50mb",
}));
app.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({
    extended: true,
}));
app.get("/data", async (req, res) => {
    res.status(200).end(`Hey ${req.query.name}!`);
});
app.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"]("./dist/"));
app.get("/*", function (req, res) {
    res.sendFile(process.cwd() + "/dist/index.html");
});
app.listen(port, () => {
    console.info("up and running on port", port);
});

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNMOEI7QUFFOUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQ3RDLE1BQU0sSUFBSSxHQUFHLG1CQUFPLENBQUMsa0JBQU0sQ0FBQyxDQUFDO0FBQzdCLE1BQU0sV0FBVyxHQUFnQjtJQUMvQixXQUFXLEVBQUUsSUFBSTtJQUNqQixNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUU7UUFHM0IsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUl6QixDQUFDO0lBQ0Qsb0JBQW9CLEVBQUUsR0FBRztJQUN6QixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztDQUNwQyxDQUFDO0FBQ0YsSUFBSSxHQUFHLEdBQUcsOENBQU8sRUFBRSxDQUFDO0FBRXBCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFFcEMsR0FBRyxDQUFDLEdBQUcsQ0FDTCxtREFBWSxDQUFDO0lBQ1gsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFRLENBQ1YsQ0FBQztBQUNGLEdBQUcsQ0FBQyxHQUFHLENBQ0wseURBQWtCLENBQUM7SUFDakIsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFRLENBQ1YsQ0FBQztBQUNGLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLHdEQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUduQyxHQUFHLENBQUMsR0FBRyxDQUNMLElBQUksRUFFSixVQUFVLEdBQUcsRUFBRSxHQUFHO0lBQ2hCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLGtCQUFrQixDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUNGLENBQUM7QUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsiZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJleHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIi9Vc2Vycy9qZWxsZS52ZXJ6aWpkZW4uZXh0L2Rldi9yZWFjdC10by13ZWJjb21wb25lbnQtY2hha3JhLWkxOG4vc3JjL3NlcnZlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENvcnNPcHRpb25zIH0gZnJvbSBcImNvcnNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG4vLyBjb25zdCBleHByZXNzU3RhdGljR3ppcCA9IHJlcXVpcmUoXCJleHByZXNzLXN0YXRpYy1nemlwXCIpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMTtcbmNvbnN0IGNvcnMgPSByZXF1aXJlKFwiY29yc1wiKTtcbmNvbnN0IGNvcnNPcHRpb25zOiBDb3JzT3B0aW9ucyA9IHtcbiAgY3JlZGVudGlhbHM6IHRydWUsXG4gIG9yaWdpbjogKG9yaWdpbiwgY2FsbGJhY2spID0+IHtcbiAgICAvLyBjb25zdCBhbGxvd2VkRG9tYWlucyA9IFtcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXTtcbiAgICAvLyBpZiAob3JpZ2luID09PSB1bmRlZmluZWQgfHwgYWxsb3dlZERvbWFpbnMuaW5kZXhPZihvcmlnaW4pICE9PSAtMSkge1xuICAgIGNhbGxiYWNrKG51bGwsIG9yaWdpbik7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNhbGxiYWNrKG5ldyBFcnJvcihgVGhlIG9yZ2luICR7b3JpZ2lufSBpcyBub3QgYWxsb3dlZCBieSBDT1JTYCkpO1xuICAgIC8vIH1cbiAgfSxcbiAgb3B0aW9uc1N1Y2Nlc3NTdGF0dXM6IDIwMCwgLy8gc29tZSBsZWdhY3kgYnJvd3NlcnMgKElFMTEsIHZhcmlvdXMgU21hcnRUVnMpIGNob2tlIG9uIDIwNFxuICBtZXRob2RzOiBbXCJHRVRcIiwgXCJQT1NUXCIsIFwiT1BUSU9OU1wiXSxcbn07XG5sZXQgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvcnMoY29yc09wdGlvbnMpKTtcbmFwcC5vcHRpb25zKFwiKlwiLCBjb3JzKGNvcnNPcHRpb25zKSk7XG5cbmFwcC51c2UoXG4gIGV4cHJlc3MuanNvbih7XG4gICAgbGltaXQ6IFwiNTBtYlwiLFxuICB9KSBhcyBhbnlcbik7XG5hcHAudXNlKFxuICBleHByZXNzLnVybGVuY29kZWQoe1xuICAgIGV4dGVuZGVkOiB0cnVlLFxuICB9KSBhcyBhbnlcbik7XG5hcHAuZ2V0KFwiL2RhdGFcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zdGF0dXMoMjAwKS5lbmQoYEhleSAke3JlcS5xdWVyeS5uYW1lfSFgKTtcbn0pO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwiLi9kaXN0L1wiKSk7XG5cbi8vIFNlcnZlIGluZGV4Lmh0bWwgZm9yIGFsbCB1bmtub3duIFVSTHNcbmFwcC5nZXQoXG4gIFwiLypcIixcbiAgLy8gQXV0aGVudGljYXRpb24uZW5zdXJlQXV0aGVudGljYXRlZEFuZFJlZGlyZWN0LFxuICBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICByZXMuc2VuZEZpbGUocHJvY2Vzcy5jd2QoKSArIFwiL2Rpc3QvaW5kZXguaHRtbFwiKTtcbiAgfVxuKTtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUuaW5mbyhcInVwIGFuZCBydW5uaW5nIG9uIHBvcnRcIiwgcG9ydCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==