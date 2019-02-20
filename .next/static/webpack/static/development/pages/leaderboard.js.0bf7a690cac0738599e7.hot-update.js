webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./src/components/board/index.js":
/*!***************************************!*\
  !*** ./src/components/board/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ModeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModeHeader */ "./src/components/board/ModeHeader.js");
/* harmony import */ var _StatsHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatsHeader */ "./src/components/board/StatsHeader.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Player */ "./src/components/board/Player.js");






var index = function index(_ref) {
  var columns = _ref.columns,
      activeColumnSort = _ref.activeColumnSort,
      sortPlayers = _ref.sortPlayers,
      players = _ref.players,
      removePlayer = _ref.removePlayer,
      handleModeChange = _ref.handleModeChange,
      mode = _ref.mode;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"],
    style: {
      backgroundColor: '#2c3c57',
      color: 'white'
    },
    sortable: true,
    unstackable: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModeHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    mode: mode,
    handleModeChange: handleModeChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatsHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    columns: columns,
    sortPlayers: sortPlayers,
    activeColumnSort: activeColumnSort
  }), players.map(function (player, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Player__WEBPACK_IMPORTED_MODULE_4__["default"], {
      columns: columns,
      player: player,
      key: index,
      mode: mode,
      boardIndex: index,
      removePlayer: removePlayer
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=leaderboard.js.0bf7a690cac0738599e7.hot-update.js.map