webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/hooks/useDebounce.js":
/*!**********************************!*\
  !*** ./src/hooks/useDebounce.js ***!
  \**********************************/
/*! exports provided: useDebounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebounce", function() { return useDebounce; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useDebounce = function useDebounce(value, delay) {
  // State and setters for debounced value
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(value),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // Update debounced value after delay
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return function () {
      clearTimeout(handler);
    };
  }, [value] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
};

/***/ })

})
//# sourceMappingURL=_app.js.f86bf3d04ea2a909f10b.hot-update.js.map