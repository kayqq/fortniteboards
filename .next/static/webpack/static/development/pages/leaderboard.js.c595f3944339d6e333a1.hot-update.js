webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./src/components/Board/index.js":
/*!***************************************!*\
  !*** ./src/components/Board/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ModeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModeHeader */ "./src/components/Board/ModeHeader.js");
/* harmony import */ var _StatsHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatsHeader */ "./src/components/Board/StatsHeader.js");
/* harmony import */ var _StatsBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StatsBody */ "./src/components/Board/StatsBody.js");






var Index = function Index(_ref) {
  var activeColumn = _ref.activeColumn,
      columns = _ref.columns,
      players = _ref.players,
      removePlayer = _ref.removePlayer,
      handleModeChange = _ref.handleModeChange,
      mode = _ref.mode,
      loading = _ref.loading;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    style: {
      backgroundColor: 'rgba(61, 74, 133, 0.3)',
      color: 'white'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModeHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    mode: mode,
    handleModeChange: handleModeChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatsHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activeColumn: activeColumn,
    columns: columns,
    loading: loading
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatsBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    columns: columns,
    players: players,
    removePlayer: removePlayer,
    mode: mode,
    loading: loading
  }), !players.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    style: {
      height: '80px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Add a player to get started!"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=leaderboard.js.c595f3944339d6e333a1.hot-update.js.map