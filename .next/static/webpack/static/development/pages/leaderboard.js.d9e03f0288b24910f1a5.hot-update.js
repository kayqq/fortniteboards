webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./src/components/board/Player.js":
/*!****************************************!*\
  !*** ./src/components/board/Player.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



var Player = function Player(_ref) {
  var columns = _ref.columns,
      mode = _ref.mode,
      player = _ref.player,
      index = _ref.index;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    key: index,
    columns: columns.length,
    stretched: true
  }, columns.map(function (column, columnIndex) {
    var columnContent = columnIndex === 0 // if first column
    ? player.username // get username
    : player.stats["".concat(column.accessor, "_").concat(mode)]; // else get stats

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      className: "compact",
      key: columnIndex,
      textAlign: columnIndex == 0 ? 'left' : 'center',
      verticalAlign: "middle" // mobile={
      //     columnIndex == 0
      //         ? '5'
      //         : columnIndex == 1
      //         ? '3'
      //         : columnIndex == 2
      //         ? '3'
      //         : columnIndex == 3
      //         ? '3.5'
      //         : columnIndex == 4
      //         ? '2'
      //         : '2'
      // }

    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h6",
      style: {
        color: 'white'
      }
    }, columnContent, columnIndex == 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h6",
      style: {
        color: '#92a2bd'
      }
    }, player.stats["matchesplayed_".concat(mode)], " Matches") : null));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ })

})
//# sourceMappingURL=leaderboard.js.d9e03f0288b24910f1a5.hot-update.js.map