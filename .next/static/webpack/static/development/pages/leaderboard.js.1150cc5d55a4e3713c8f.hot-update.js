webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./src/components/board/ModeHeader.js":
/*!********************************************!*\
  !*** ./src/components/board/ModeHeader.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



var ModeHeader = function ModeHeader(_ref) {
  var mode = _ref.mode,
      handleModeChange = _ref.handleModeChange;
  var title = mode.charAt(0).toUpperCase() + mode.slice(1);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row,
    columns: "3",
    className: mode
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    as: "span",
    floated: "left",
    textAlign: "left",
    onClick: function onClick() {
      return handleModeChange('reverse');
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "angle left"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    as: "span",
    textAlign: "center"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    as: "span",
    floated: "right",
    textAlign: "right",
    onClick: function onClick() {
      return handleModeChange('forward');
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "angle right"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ModeHeader);

/***/ })

})
//# sourceMappingURL=leaderboard.js.1150cc5d55a4e3713c8f.hot-update.js.map