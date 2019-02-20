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
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Header,
    columns: columns.length,
    stretched: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    style: {
      backgroundColor: '#2c3c57'
    },
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell,
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
      color: activeColumnSort == '#' ? 'yellow' : '#92a2bd',
      backgroundColor: activeColumnSort == '#' ? 'black' : '2c3c57'
    }
  }, "#"))), columns.map(function (column, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      style: {
        backgroundColor: '#2c3c57'
      },
      as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell,
      className: index == 0 ? '' : 'compact',
      key: index,
      onClick: function onClick() {
        sortPlayers(column.header);
      },
      textAlign: index == 0 ? 'left' : 'center',
      verticalAlign: "middle",
      mobile: column.size
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      size: "tiny"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
      as: "h6",
      style: {
        color: activeColumnSort == column.header ? 'yellow' : '#92a2bd'
      }
    }, column.header)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StatsHeader);

/***/ })

})
//# sourceMappingURL=leaderboard.js.2520f5a025f5aa92cd5b.hot-update.js.map