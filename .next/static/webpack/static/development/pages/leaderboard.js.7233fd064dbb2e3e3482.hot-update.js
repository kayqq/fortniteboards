webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./src/components/leaderboard/index.js":
/*!*********************************************!*\
  !*** ./src/components/leaderboard/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Leaderboard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ModeHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ModeHeader */ "./src/components/leaderboard/ModeHeader.js");
/* harmony import */ var _StatsHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StatsHeader */ "./src/components/leaderboard/StatsHeader.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Player */ "./src/components/leaderboard/Player.js");













var Leaderboard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Leaderboard, _Component);

  function Leaderboard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Leaderboard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Leaderboard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleModeChange", function (direction) {
      var mode = _this.state.mode;
      var nextMode = '';

      switch (mode) {
        case 'solo':
          nextMode = direction === 'forward' ? 'duo' : 'squad';
          break;

        case 'duo':
          nextMode = direction === 'forward' ? 'squad' : 'solo';
          break;

        case 'squad':
          nextMode = direction === 'forward' ? 'solo' : 'duo';
          break;

        default:
          break;
      }

      _this.setState({
        mode: nextMode
      });
    });

    _this.state = {
      mode: 'solo'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Leaderboard, [{
    key: "render",
    value: function render() {
      var players = this.props.players;
      var mode = this.state.mode;
      var columns = [{
        header: 'Player',
        accessor: 'username'
      }, {
        header: 'K/D',
        accessor: 'kd'
      }, {
        header: 'Wins',
        accessor: 'placetop1'
      }, {
        header: 'Kills',
        accessor: 'kills'
      }, {
        header: 'Win %',
        accessor: 'winrate'
      }, {
        header: 'Matches',
        accessor: 'matchesplayed'
      }];
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        style: {
          backgroundColor: '#2c3c57',
          color: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ModeHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
        mode: mode,
        handleModeChange: this.handleModeChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_StatsHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
        columns: columns
      }), players.map(function (player, key) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Player__WEBPACK_IMPORTED_MODULE_11__["default"], {
          columns: columns,
          player: player,
          key: key,
          mode: mode
        });
      }));
    }
  }]);

  return Leaderboard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=leaderboard.js.7233fd064dbb2e3e3482.hot-update.js.map