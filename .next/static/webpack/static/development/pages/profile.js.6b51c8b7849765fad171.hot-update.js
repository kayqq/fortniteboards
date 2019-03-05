webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./src/components/Profile/TotalStatsTable.js":
/*!***************************************************!*\
  !*** ./src/components/Profile/TotalStatsTable.js ***!
  \***************************************************/
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
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

var TotalStatsTable = function TotalStatsTable(_ref2) {
  var kd = _ref2.kd,
      kills = _ref2.kills,
      wins = _ref2.wins,
      winrate = _ref2.winrate;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    style: {
      backgroundColor: '#6c80a2',
      color: 'white'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, "Totals")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    style: {
      backgroundColor: '#2c3c57',
      color: 'white',
      height: '200px',
      marginBottom: '20px'
    },
    columns: "2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "medium",
    style: {
      color: 'white'
    }
  }, wins, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    style: {
      color: '#92a2bd'
    }
  }, "Wins"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "medium",
    style: {
      color: 'white'
    }
  }, winrate, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    style: {
      color: '#92a2bd'
    }
  }, "Win %"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "medium",
    style: {
      color: 'white'
    }
  }, kills, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    style: {
      color: '#92a2bd'
    }
  }, "Kills"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "medium",
    style: {
      color: 'white'
    }
  }, kd, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    style: {
      color: '#92a2bd'
    }
  }, "K/D")))));
};

/* harmony default export */ __webpack_exports__["default"] = (TotalStatsTable);

/***/ })

})
//# sourceMappingURL=profile.js.6b51c8b7849765fad171.hot-update.js.map