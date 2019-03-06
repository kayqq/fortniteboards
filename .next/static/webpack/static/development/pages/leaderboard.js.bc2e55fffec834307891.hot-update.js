webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./src/components/Board/Players.js":
/*!*****************************************!*\
  !*** ./src/components/Board/Players.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/components/Board/Player.js");




var Players = function Players(_ref) {
  var columns = _ref.columns,
      players = _ref.players,
      removePlayer = _ref.removePlayer,
      mode = _ref.mode,
      loading = _ref.loading;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dimmer"].Dimmable, {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row,
    dimmed: loading,
    style: {
      backgroundColor: '#2c3c57',
      color: 'white',
      padding: '0',
      margin: '0'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dimmer"], {
    active: loading
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Loader"], null, "Loading...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    style: {
      width: '100%',
      margin: '0',
      padding: '0'
    }
  }, players.map(function (player, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Player__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      columns: columns,
      player: player,
      mode: mode,
      boardIndex: index,
      removePlayer: removePlayer
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Players);

/***/ })

})
//# sourceMappingURL=leaderboard.js.bc2e55fffec834307891.hot-update.js.map