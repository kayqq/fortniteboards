webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/actions/constants.js":
/*!**********************************!*\
  !*** ./src/actions/constants.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/reducers/search.js":
/*!********************************!*\
  !*** ./src/reducers/search.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/constants */ "./src/actions/constants.js");
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_actions_constants__WEBPACK_IMPORTED_MODULE_1__);


var initialState = {
  running: false,
  searchResults: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["FETCH_BY_PLAYERNAME_SUCCESS"]:
      // The following is a work around for Semantic Search key and title prop bug
      var searchResults = action.payload.map(function (result, index) {
        result.key = index;
        result.title = result.username;
        return result;
      });
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        searchResults: searchResults
      });

    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.0db02c71ee1f31b0a6ab.hot-update.js.map