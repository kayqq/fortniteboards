webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



var Navbar = function Navbar(_ref) {
  var router = _ref.router;

  var changeRoute = function changeRoute(path) {
    router.push(router.pathname == path ? router.asPath : path);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    className: "Navbar",
    pointing: true,
    fixed: "top",
    secondary: true,
    size: "large"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    active: router.pathname == '/',
    onClick: function onClick() {
      return changeRoute('/');
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    as: "a"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    active: router.pathname == '/leaderboard',
    onClick: function onClick() {
      return changeRoute('/leaderboard');
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    as: "a"
  }, "Leaderboards"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=_app.js.7a0f2576b739d06099e8.hot-update.js.map