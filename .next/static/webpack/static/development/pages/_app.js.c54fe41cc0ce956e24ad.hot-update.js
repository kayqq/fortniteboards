webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/object-keys/implementation.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/object.assign/implementation.js":
false,

/***/ "./node_modules/object.assign/index.js":
false,

/***/ "./node_modules/object.assign/polyfill.js":
false,

/***/ "./node_modules/object.assign/shim.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

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
    } // onClick={() => console.log('clicked!')}
    ,
    maxWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"].onlyMobile.maxWidth
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=_app.js.c54fe41cc0ce956e24ad.hot-update.js.map