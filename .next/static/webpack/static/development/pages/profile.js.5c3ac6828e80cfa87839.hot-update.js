webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./src/components/Profile/ProfileHeader.js":
/*!*************************************************!*\
  !*** ./src/components/Profile/ProfileHeader.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



var ProfileHeader = function ProfileHeader(_ref) {
  var username = _ref.username,
      season = _ref.season,
      matches = _ref.matches;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    style: {
      marginBottom: '16px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    raised: true,
    fluid: true,
    style: {
      backgroundColor: '#6c80a2'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    bordered: true,
    floated: "right",
    size: "tiny",
    src: "https://pm1.narvii.com/6918/222ae5aa45c92f4ce6b86e39d3be5c0385473d9er1-928-760v2_hq.jpg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h1",
    style: {
      color: 'white'
    }
  }, username, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, null, "Season ", season))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, null, matches, " Matches"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileHeader);

/***/ })

})
//# sourceMappingURL=profile.js.5c3ac6828e80cfa87839.hot-update.js.map