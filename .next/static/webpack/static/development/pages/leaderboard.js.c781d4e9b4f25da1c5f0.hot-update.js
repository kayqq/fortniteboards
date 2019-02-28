webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./pages/leaderboard.js":
/*!******************************!*\
  !*** ./pages/leaderboard.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _src_components_SearchBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/components/SearchBar */ "./src/components/SearchBar.js");
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/actions */ "./src/actions/index.js");
/* harmony import */ var _src_components_Board__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/components/Board */ "./src/components/Board/index.js");


















 // show awards, i.e. most kills, most wins, highest kd etc etc in separate div
// share / reset / refresh buttons

var CopyLinkPopup = function CopyLinkPopup(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState, 2),
      isCopied = _useState2[0],
      setCopied = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState3, 2),
      link = _useState4[0],
      setLink = _useState4[1];

  var handleCopyClipboard = function handleCopyClipboard(link) {
    var didCopy = copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14___default()(link);
    setCopied(didCopy);
  };

  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Popup"], {
    style: {
      width: '100%'
    },
    hideOnScroll: true,
    hoverable: true,
    position: "top center",
    onOpen: function onOpen() {
      return setLink(location.href);
    },
    onClose: function onClose() {
      return setCopied(false);
    },
    content: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
      textAlign: "center"
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Row, {
      textAlign: "left"
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Column, {
      textAlign: "left"
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Header"], {
      as: "h5",
      color: isCopied ? 'green' : 'grey'
    }, isCopied ? 'Link copied!' : 'Link to custom leaderboard: '))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Row, {
      style: {
        paddingTop: '0px'
      }
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Input"], {
      value: link
    }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
      icon: isCopied ? 'check' : 'linkify',
      color: isCopied ? 'green' : 'grey',
      compact: true,
      onClick: function onClick() {
        return handleCopyClipboard(link);
      }
    })))),
    trigger: children
  });
};

var Leaderboard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Leaderboard, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(Leaderboard, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_ref2) {
        var query, usernames, mode;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref2.query;
                usernames = query.usernames;
                mode = query.mode;

                if (usernames) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", {
                  usernames: []
                });

              case 5:
                // Format into Array
                usernames = typeof usernames == 'string' ? [usernames] : usernames;
                return _context.abrupt("return", {
                  usernames: usernames,
                  mode: mode
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Leaderboard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Leaderboard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Leaderboard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "initColumns", function () {
      _this.setState({
        columns: [{
          header: 'Player',
          accessor: 'username',
          sort: _this.handleSort('username')
        }, {
          header: 'K/D',
          accessor: 'kd',
          sort: _this.handleSort('kd')
        }, {
          header: 'Win %',
          accessor: 'winrate',
          sort: _this.handleSort('winrate')
        }, {
          header: 'Kills',
          accessor: 'kills',
          sort: _this.handleSort('kills')
        }, {
          header: 'Wins',
          accessor: 'placetop1',
          sort: _this.handleSort('placetop1')
        }]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "initPlayers",
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(usernames) {
        var initialPlayers;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                initialPlayers = []; // Start load player stats

                _this.setState({
                  loading: true,
                  players: new Array(usernames.length).fill(null)
                });

                _context2.next = 4;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(usernames.map(function (username) {
                  return Object(_src_actions__WEBPACK_IMPORTED_MODULE_17__["getProfileByUsername"])(username);
                }));

              case 4:
                initialPlayers = _context2.sent;

                // End load player stats
                _this.setState({
                  players: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(initialPlayers),
                  loading: false
                }, function () {
                  return _this.updateURL();
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "refreshBoard", function () {
      var players = _this.state.players;
      var usernames = players.map(function (player) {
        return player.username;
      });

      _this.initPlayers(usernames);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "addPlayer",
    /*#__PURE__*/
    function () {
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(player) {
        var _this$state, players, activeColumn, mode, direction, newPlayer, updatedPlayers;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this$state = _this.state, players = _this$state.players, activeColumn = _this$state.activeColumn, mode = _this$state.mode, direction = _this$state.direction; // Check if already added to board

                if (!_this.isPlayerSelected(player.uid)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return");

              case 3:
                _context3.next = 5;
                return Object(_src_actions__WEBPACK_IMPORTED_MODULE_17__["getProfileByUid"])(player.uid);

              case 5:
                newPlayer = _context3.sent;
                updatedPlayers = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(players), [newPlayer]); // if pre-sorted then apply sort setting to updated players

                if (activeColumn !== null) {
                  updatedPlayers = _this.sortPlayers(updatedPlayers, activeColumn, mode, direction);
                }

                _this.setState({
                  players: updatedPlayers
                }, function () {
                  return _this.updateURL();
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "removePlayer", function (index) {
      var players = _this.state.players;
      var updatedPlayers = players.filter(function (player, i) {
        return i !== index;
      });

      _this.setState({
        players: updatedPlayers
      }, function () {
        return _this.updateURL();
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "changeMode", function (direction) {
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
      }, function () {
        return _this.updateURL();
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleSort", function (accessor) {
      return function () {
        var _this$state2 = _this.state,
            activeColumn = _this$state2.activeColumn,
            players = _this$state2.players,
            direction = _this$state2.direction,
            mode = _this$state2.mode; // Reverse order if direction set, else default to desc

        var sortDirection = direction === 'desc' ? 'asc' : 'desc';
        var sortedColumn = activeColumn; // Default to desc order on column switch

        if (activeColumn !== accessor) {
          // Default to asc order if username column
          sortDirection = accessor == 'username' ? 'asc' : 'desc'; // Set sorted column name

          sortedColumn = accessor;
        } // Sort players


        var sortedPlayers = _this.sortPlayers(players, accessor, mode, sortDirection);

        _this.setState({
          activeColumn: sortedColumn,
          players: sortedPlayers,
          direction: sortDirection
        }, function () {
          return _this.updateURL();
        });
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "sortPlayers", function (players, accessor, mode, direction) {
      return accessor == 'username' ? lodash__WEBPACK_IMPORTED_MODULE_13___default.a.orderBy(_this.state.players, [function (o) {
        return o.username.toLowerCase();
      }], [direction]) : lodash__WEBPACK_IMPORTED_MODULE_13___default.a.orderBy(players, function (o) {
        return o.stats["".concat(accessor, "_").concat(mode)];
      }, [direction]);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "isPlayerSelected", function (uid) {
      var players = _this.state.players;
      return players.find(function (player) {
        return player.uid === uid;
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "updateURL", function () {
      var router = _this.props.router;
      var _this$state3 = _this.state,
          players = _this$state3.players,
          mode = _this$state3.mode;
      var usernames = players.map(function (player) {
        return player.username;
      });
      router.replace({
        pathname: '/leaderboard',
        query: {
          mode: mode,
          usernames: usernames
        },
        options: {
          shallow: true
        }
      });
    });

    _this.state = {
      players: [],
      mode: props.mode || 'solo',
      columns: [],
      activeColumn: null,
      direction: null,
      loading: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(Leaderboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        url: location.href
      });
      this.initColumns();
      var usernames = this.props.usernames;

      if (usernames.length) {
        this.initPlayers(usernames);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state4 = this.state,
          activeColumn = _this$state4.activeColumn,
          columns = _this$state4.columns,
          mode = _this$state4.mode,
          players = _this$state4.players,
          loading = _this$state4.loading;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Container"], {
        text: true,
        textAlign: "center",
        style: {
          paddingTop: '100px',
          paddingBottom: '100px' // height: '100%'

        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
        centered: true,
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3", null, "Leaderboards")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Row, {
        columns: "1"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Column, {
        mobile: "16",
        computer: "6",
        largeScreen: "6",
        tablet: "6",
        widescreen: "6"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_src_components_SearchBar__WEBPACK_IMPORTED_MODULE_16__["default"], {
        handleResultSelect: this.addPlayer
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Row, {
        className: "compact"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Menu"], {
        tabular: true,
        fluid: true,
        style: {
          backgroundColor: 'rgba(61, 74, 133, 0)'
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Menu"].Item, {
        fitted: "vertically",
        position: "right",
        as: "a",
        style: {
          backgroundColor: 'rgba(61, 74, 133, 0.3)',
          borderRadius: '0.28571429rem',
          color: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(CopyLinkPopup, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, "Share ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
        name: "share"
      })))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Menu"].Item, {
        fitted: "vertically",
        style: {
          marginLeft: '5px',
          borderRadius: '0.28571429rem',
          backgroundColor: 'rgba(61, 74, 133, 0.3)',
          color: 'white'
        },
        as: "a",
        disabled: loading,
        onClick: function onClick() {
          return _this2.refreshBoard();
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, "Refresh ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
        name: "sync alternate"
      }))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Column, {
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_src_components_Board__WEBPACK_IMPORTED_MODULE_18__["default"], {
        activeColumn: activeColumn,
        columns: columns,
        mode: mode,
        players: players,
        removePlayer: this.removePlayer,
        handleModeChange: this.changeMode,
        loading: loading
      })))));
    }
  }]);

  return Leaderboard;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Leaderboard);

/***/ })

})
//# sourceMappingURL=leaderboard.js.c781d4e9b4f25da1c5f0.hot-update.js.map