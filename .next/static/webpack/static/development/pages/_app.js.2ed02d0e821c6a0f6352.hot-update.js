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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var Navbar = function Navbar(_ref) {
  var router = _ref.router;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    style: {
      backgroundColor: '#4a4a4a',
      color: 'white',
      padding: '0px'
    },
    textAlign: "center",
    vertical: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    pointing: true,
    fixed: "top",
    secondary: true,
    size: "large",
    style: {
      backgroundColor: '#4a4a4a',
      color: 'white'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      backgroundColor: '#4a4a4a',
      color: 'white'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    active: router.pathname == '/',
    style: {
      color: 'white'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    as: "a"
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    active: router.pathname == '/leaderboard',
    style: {
      color: 'white',
      backgroundColor: router.pathname == '/leaderboard' ? 'yellow' : null
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: router.pathname == '/leaderboard' ? router.asPath : '/leaderboard'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    as: "a"
  }, "Leaderboards"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item,
    icon: "bars",
    position: "right",
    size: "large",
    compact: true,
    style: {
      color: 'grey'
    } // onClick={() => console.log('clicked!')}
    ,
    maxWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"].onlyMobile.maxWidth
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=_app.js.2ed02d0e821c6a0f6352.hot-update.js.map