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

  var handleRouteChange = function handleRouteChange(path) {
    switch (path) {
      case '/':
        router.push('/');
        break;

      case '/leaderboard':
        router.push(router.pathname == '/leaderboard' ? router.asPath : '/leaderboard');
        break;
    }

    router.push(router.pathname == '/leaderboard' ? router.asPath : '/leaderboard');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    style: {
      backgroundColor: '#1B2137',
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
      backgroundColor: '#1B2137',
      color: 'white'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      backgroundColor: '#1B2137',
      color: 'white'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    active: router.pathname == '/',
    style: {
      color: router.pathname == '/' ? '#1B2137' : 'white',
      backgroundColor: router.pathname == '/' ? 'yellow' : null
    },
    onClick: function onClick() {
      router.push('/');
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    as: "a"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    active: router.pathname == '/leaderboard',
    style: {
      color: router.pathname == '/leaderboard' ? '#1B2137' : 'white',
      backgroundColor: router.pathname == '/leaderboard' ? 'yellow' : null
    },
    onClick: function onClick() {
      router.push(router.pathname == '/leaderboard' ? router.asPath : '/leaderboard');
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    as: "a"
  }, "Leaderboards")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item,
    icon: "bars",
    fitted: "horizontally",
    position: "right",
    size: "large",
    style: {
      color: 'grey'
    },
    maxWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"].onlyMobile.maxWidth
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=_app.js.ba58d47290d4f70ac33f.hot-update.js.map