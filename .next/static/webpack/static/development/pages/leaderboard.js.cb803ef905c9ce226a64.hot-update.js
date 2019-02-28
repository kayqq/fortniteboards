webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./src/components/Board/StatsHeader.js":
/*!*********************************************!*\
  !*** ./src/components/Board/StatsHeader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



var StatsHeader = function StatsHeader(_ref) {
  var activeColumn = _ref.activeColumn,
      columns = _ref.columns;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    stretched: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column,
    minWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"].onlyMobile.maxWidth,
    textAlign: "center",
    verticalAlign: "middle",
    mobile: "1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "tiny"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    as: "h6",
    style: {
      color: '#92a2bd'
    }
  }, "#"))), columns.map(function (column, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      style: {
        backgroundColor: '#2c3c57'
      },
      className: index == 0 ? '' : 'compact',
      key: index,
      onClick: function onClick() {
        return column.sort();
      },
      textAlign: index == 0 ? 'left' : 'center',
      verticalAlign: "middle",
      mobile: index == 0 ? '6' : '2'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      size: "tiny"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
      as: "h6",
      style: {
        color: column.accessor == activeColumn ? 'yellow' : '#92a2bd',
        textDecoration: column.accessor == activeColumn ? 'underline' : 'null'
      }
    }, column.header)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StatsHeader);

/***/ })

})
//# sourceMappingURL=leaderboard.js.cb803ef905c9ce226a64.hot-update.js.map