webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var defaultMessage = 'Copy to clipboard: #{key}, Enter';

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) { options = {}; }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement('span');
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = 'unset';
    // prevents scrolling to the end of the page
    mark.style.position = 'fixed';
    mark.style.top = 0;
    mark.style.clip = 'rect(0, 0, 0, 0)';
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = 'pre';
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = 'text';
    mark.style.MozUserSelect = 'text';
    mark.style.msUserSelect = 'text';
    mark.style.userSelect = 'text';

    document.body.appendChild(mark);

    range.selectNode(mark);
    selection.addRange(range);

    var successful = document.execCommand('copy');
    if (!successful) {
      throw new Error('copy command was unsuccessful');
    }
    success = true;
  } catch (err) {
    debug && console.error('unable to copy using execCommand: ', err);
    debug && console.warn('trying IE specific stuff');
    try {
      window.clipboardData.setData('text', text);
      success = true;
    } catch (err) {
      debug && console.error('unable to copy using clipboardData: ', err);
      debug && console.error('falling back to prompt');
      message = format('message' in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == 'function') {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "./pages/leaderboard.js":
/*!******************************!*\
  !*** ./pages/leaderboard.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _src_components_SearchBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/components/SearchBar */ "./src/components/SearchBar.js");
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/actions */ "./src/actions/index.js");
/* harmony import */ var _src_components_Board__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/components/Board */ "./src/components/Board/index.js");
/* harmony import */ var _src_hooks_useCopyClipboard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/hooks/useCopyClipboard */ "./src/hooks/useCopyClipboard.js");


















 // show awards, i.e. most kills, most wins, highest kd etc etc in separate div
// share / reset / refresh buttons

var Leaderboard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Leaderboard, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(Leaderboard, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(_ref) {
        var query, usernames, mode;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
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

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Leaderboard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Leaderboard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "initColumns", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "initPlayers",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(usernames) {
        var initialPlayers;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                initialPlayers = []; // Start load player stats

                _this.setState({
                  loading: true,
                  players: new Array(usernames.length).fill(null)
                });

                _context2.next = 4;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.all(usernames.map(function (username) {
                  return Object(_src_actions__WEBPACK_IMPORTED_MODULE_16__["getProfileByUsername"])(username);
                }));

              case 4:
                initialPlayers = _context2.sent;

                // End load player stats
                _this.setState({
                  players: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(initialPlayers),
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
        return _ref2.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "addPlayer",
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(player) {
        var _this$state, players, column, mode, direction, newPlayer, updatedPlayers;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this$state = _this.state, players = _this$state.players, column = _this$state.column, mode = _this$state.mode, direction = _this$state.direction; // Check if already added to board

                if (!_this.isPlayerSelected(player.uid)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return");

              case 3:
                _context3.next = 5;
                return Object(_src_actions__WEBPACK_IMPORTED_MODULE_16__["getProfileByUid"])(player.uid);

              case 5:
                newPlayer = _context3.sent;
                updatedPlayers = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(players), [newPlayer]); // if pre-sorted then apply sort setting to updated players

                if (column !== null) {
                  updatedPlayers = _this.sortPlayers(updatedPlayers, column, mode, direction);
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
        return _ref3.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "removePlayer", function (index) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "changeMode", function (direction) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleSort", function (accessor) {
      return function () {
        var _this$state2 = _this.state,
            column = _this$state2.column,
            players = _this$state2.players,
            direction = _this$state2.direction,
            mode = _this$state2.mode; // Reverse order if direction set, else default to desc

        var sortDirection = direction === 'desc' ? 'asc' : 'desc';
        var sortedColumn = column; // Default to desc order on column switch

        if (column !== accessor) {
          // Default to asc order if username column
          sortDirection = accessor == 'username' ? 'asc' : 'desc'; // Set sorted column name

          sortedColumn = accessor;
        } // Sort players


        var sortedPlayers = _this.sortPlayers(players, accessor, mode, sortDirection);

        _this.setState({
          column: sortedColumn,
          players: sortedPlayers,
          direction: sortDirection
        }, function () {
          return _this.updateURL();
        });
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "sortPlayers", function (players, accessor, mode, direction) {
      return accessor == 'username' ? lodash__WEBPACK_IMPORTED_MODULE_13___default.a.orderBy(_this.state.players, [function (o) {
        return o.username.toLowerCase();
      }], [direction]) : lodash__WEBPACK_IMPORTED_MODULE_13___default.a.orderBy(players, function (o) {
        return o.stats["".concat(accessor, "_").concat(mode)];
      }, [direction]);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "isPlayerSelected", function (uid) {
      var players = _this.state.players;
      return players.find(function (player) {
        return player.uid === uid;
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "updateURL", function () {
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
      column: null,
      direction: null,
      loading: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(Leaderboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initColumns();
      var usernames = this.props.usernames;

      if (usernames.length) {
        this.initPlayers(usernames);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          columns = _this$state4.columns,
          mode = _this$state4.mode,
          players = _this$state4.players,
          loading = _this$state4.loading;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Container"], {
        text: true,
        textAlign: "center",
        style: {
          paddingTop: '100px',
          paddingBottom: '100px',
          height: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"], {
        centered: true,
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3", null, "Leaderboards")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Row, {
        columns: "1"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
        mobile: "16",
        computer: "6",
        largeScreen: "6",
        tablet: "6",
        widescreen: "6"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_src_components_SearchBar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        handleResultSelect: this.addPlayer
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Row, {
        style: {
          paddingTop: '0px'
        },
        columns: "2",
        divided: true
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
        textAlign: "center"
      }, "Share ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "share"
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
        textAlign: "center"
      }, "Refresh ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "sync alternate"
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_src_components_Board__WEBPACK_IMPORTED_MODULE_17__["default"], {
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

var Share = function Share(_ref4) {
  var url = _ref4.url;

  var _useCopyClipboard = Object(_src_hooks_useCopyClipboard__WEBPACK_IMPORTED_MODULE_18__["default"])(url),
      _useCopyClipboard2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useCopyClipboard, 2),
      isCopied = _useCopyClipboard2[0],
      setCopied = _useCopyClipboard2[1];

  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
    onClick: setCopied
  }, "Was it copied? ", isCopied ? 'Yes! 👍' : 'Nope! 👎');
};

/***/ }),

/***/ "./src/hooks/useCopyClipboard.js":
/*!***************************************!*\
  !*** ./src/hooks/useCopyClipboard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCopyClipboard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);



function useCopyClipboard(text) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isCopied = _useState2[0],
      setIsCopied = _useState2[1];

  return [isCopied, function () {
    var didCopy = copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(text);
    setIsCopied(didCopy);
  }];
}

/***/ })

})
//# sourceMappingURL=leaderboard.js.c703fdfd039b763959e8.hot-update.js.map