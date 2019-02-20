webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./src/components/board/StatsHeader.js":
/*!*********************************************!*\
  !*** ./src/components/board/StatsHeader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



var StatsHeader = function StatsHeader(_ref) {
  var columns = _ref.columns,
      activeColumnSort = _ref.activeColumnSort,
      sortPlayers = _ref.sortPlayers;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    columns: columns.length,
    stretched: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    style: {
      backgroundColor: activeColumnSort == '#' ? 'black' : '#2c3c57'
    },
    textAlign: "center",
    verticalAlign: "middle",
    mobile: "1",
    onClick: function onClick() {
      sortPlayers('#');
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "tiny"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    as: "h6",
    style: {
      color: activeColumnSort == '#' ? 'yellow' : '#92a2bd'
    }
  }, "#"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    style: {
      backgroundColor: '#2c3c57'
    },
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell,
    textAlign: "left",
    verticalAlign: "middle",
    mobile: "5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "tiny"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    as: "h6",
    style: {
      color: '#92a2bd'
    }
  }, "Player"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    style: {
      backgroundColor: '#2c3c57'
    },
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell,
    className: "compact",
    textAlign: "center",
    verticalAlign: "middle",
    mobile: "2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "tiny"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    as: "h6",
    style: {
      color: '#92a2bd'
    }
  }, "K/D"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    style: {
      backgroundColor: '#2c3c57'
    },
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell,
    className: "compact",
    textAlign: "center",
    verticalAlign: "middle",
    mobile: "2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "tiny"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    as: "h6",
    style: {
      color: '#92a2bd'
    }
  }, "Win %"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    style: {
      backgroundColor: '#2c3c57'
    },
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell,
    className: "compact",
    textAlign: "center",
    verticalAlign: "middle",
    mobile: "2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "tiny"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    as: "h6",
    style: {
      color: '#92a2bd'
    }
  }, "Kills"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    style: {
      backgroundColor: '#2c3c57'
    },
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell,
    className: "compact",
    textAlign: "center",
    verticalAlign: "middle",
    mobile: "2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "tiny"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    as: "h6",
    style: {
      color: '#92a2bd'
    }
  }, "Wins"))));
};

/* harmony default export */ __webpack_exports__["default"] = (StatsHeader);

/***/ })

})
//# sourceMappingURL=leaderboard.js.093cfeb866c8179bc579.hot-update.js.map