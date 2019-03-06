webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./src/components/Board/Player.js":
false,

/***/ "./src/components/Board/StatsBody.js":
/*!*******************************************!*\
  !*** ./src/components/Board/StatsBody.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _StatsRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatsRow */ "./src/components/Board/StatsRow.js");




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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Player, {
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

/***/ }),

/***/ "./src/components/Board/StatsRow.js":
/*!******************************************!*\
  !*** ./src/components/Board/StatsRow.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");




var StatsColumn = function StatsColumn(_ref) {
  var index = _ref.index,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? null : _ref$content,
      _ref$matches = _ref.matches,
      matches = _ref$matches === void 0 ? null : _ref$matches;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    className: index == 0 ? '' : 'compact',
    textAlign: index == 0 ? 'left' : 'center',
    mobile: index == 0 ? '6' : '2'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: index == 0 ? 'h4' : 'h4',
    style: {
      color: 'white'
    }
  }, content == null ? 'XXXX' : content, index == 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"].Subheader, {
    size: "small",
    style: {
      color: '#92a2bd',
      whiteSpace: 'nowrap'
    }
  }, matches == null ? '0000' : matches, " Matches")));
};

var TrashColumn = function TrashColumn(_ref2) {
  var index = _ref2.index,
      removePlayer = _ref2.removePlayer;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    textAlign: "center",
    mobile: "1",
    onClick: function onClick() {
      removePlayer(index);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    size: "small",
    color: "red",
    name: "trash alternate outline"
  }));
};

var Player = function Player(_ref3) {
  var columns = _ref3.columns,
      mode = _ref3.mode,
      player = _ref3.player,
      boardIndex = _ref3.boardIndex,
      removePlayer = _ref3.removePlayer;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Responsive"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column,
    minWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Responsive"].onlyMobile.maxWidth,
    textAlign: "center",
    mobile: "1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h4",
    style: {
      color: '#92a2bd'
    }
  }, boardIndex + 1)), columns.map(function (column, columnIndex) {
    if (!player) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatsColumn, {
        key: columnIndex,
        index: columnIndex
      });
    }

    var columnContent = columnIndex === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/profile/".concat(player.username)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, player.username)) : player.stats["".concat(column.accessor, "_").concat(mode)];
    var matches = player.stats["matchesplayed_".concat(mode)];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatsColumn, {
      key: columnIndex,
      index: columnIndex,
      content: columnContent,
      matches: matches
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TrashColumn, {
    index: boardIndex,
    removePlayer: removePlayer
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ })

})
//# sourceMappingURL=leaderboard.js.bbac9c8e9c2f0b0e5cbf.hot-update.js.map