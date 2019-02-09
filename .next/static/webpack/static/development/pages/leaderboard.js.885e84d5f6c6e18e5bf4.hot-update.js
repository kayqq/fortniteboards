webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./pages/leaderboard.js":
/*!******************************!*\
  !*** ./pages/leaderboard.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/SearchBar */ "./src/components/SearchBar.js");
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/actions */ "./src/actions/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // show awards, i.e. most kills, most wins, highest kd etc etc in separate div

var Board = function Board(_ref) {
  var players = _ref.players,
      mode = _ref.mode;
  // const columns = { "K/D": "kd", Wins: "placetop1" };
  // console.log(Object.entries(columns));
  // Make columns map to make rendering the columns dynamic instead of static written jsx
  var backgroundColor = "";
  var title = "";

  switch (mode) {
    case "solo":
      backgroundColor = "#14c8ff";
      title = "Solo";
      break;

    case "duo":
      backgroundColor = "#f3af19";
      title = "Duo";
      break;

    case "squad":
      backgroundColor = "#9d4dbb";
      title = "Squad";
      break;

    default:
      break;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    style: {
      backgroundColor: "#2c3c57",
      color: "white"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Row, {
    style: {
      backgroundColor: backgroundColor
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, null, title)), players.map(function (player) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Row, {
      columns: "5",
      stretched: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
      textAlign: "center",
      verticalAlign: "middle"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
      size: "medium",
      style: {
        color: "white"
      }
    }, player.stats["kd_".concat(mode)], react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"].Subheader, {
      style: {
        color: "#92a2bd"
      }
    }, "K/D"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
      textAlign: "center",
      verticalAlign: "middle"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
      size: "medium",
      style: {
        color: "white"
      }
    }, player.stats["placetop1_".concat(mode)], react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"].Subheader, {
      style: {
        color: "#92a2bd"
      }
    }, "Wins"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
      textAlign: "center",
      verticalAlign: "middle"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
      size: "medium",
      style: {
        color: "white"
      }
    }, player.stats["kills_".concat(mode)], react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"].Subheader, {
      style: {
        color: "#92a2bd"
      }
    }, "Kills"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
      textAlign: "center",
      verticalAlign: "middle"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
      size: "medium",
      style: {
        color: "white"
      }
    }, player.stats["winrate_".concat(mode)], react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"].Subheader, {
      style: {
        color: "#92a2bd"
      }
    }, "Win %"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
      textAlign: "center",
      verticalAlign: "middle"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
      size: "medium",
      style: {
        color: "white"
      }
    }, player.stats["matchesplayed_".concat(mode)], react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"].Subheader, {
      style: {
        color: "#92a2bd"
      }
    }, "Matches"))));
  }));
};

var Leaderboard =
/*#__PURE__*/
function (_Component) {
  _inherits(Leaderboard, _Component);

  function Leaderboard(props) {
    var _this;

    _classCallCheck(this, Leaderboard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Leaderboard).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleResultSelect",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(username, resetSearchFn) {
        var players, newPlayer;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                players = _this.state.players;

                if (!players.find(function (player) {
                  return player.username === username;
                })) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", resetSearchFn());

              case 3:
                _context.next = 5;
                return Object(_src_actions__WEBPACK_IMPORTED_MODULE_6__["getProfile"])(username);

              case 5:
                newPlayer = _context.sent;

                _this.setState({
                  players: [].concat(_toConsumableArray(players), [newPlayer])
                }, function () {
                  return resetSearchFn();
                });

                console.log(_this.state.players);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "prefetchRoute", function (username) {
      _this.props.router.prefetch("/profile/".concat(username));
    });

    _this.state = {
      players: [],
      mode: "solo"
    };
    return _this;
  }

  _createClass(Leaderboard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          searchResults = _this$props.searchResults,
          fetchByUsername = _this$props.fetchByUsername;

      var debouncedfetchByUsername = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.debounce(fetchByUsername, 500, {
        maxWait: 1000
      });

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        textAlign: "center",
        style: {
          paddingTop: "200px",
          paddingBottom: "100px",
          height: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Leaderboard"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        columns: "1",
        centered: true,
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
        mobile: "16",
        computer: "6",
        largeScreen: "6",
        tablet: "6",
        widescreen: "6"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        handleResultSelect: this.handleResultSelect,
        prefetchRoute: this.prefetchRoute,
        fetchByUsername: debouncedfetchByUsername,
        results: searchResults
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        text: true,
        style: {
          marginTop: "1em",
          backgroundColor: "#2c3c57"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Board, {
        players: this.state.players,
        mode: this.state.mode
      }))))));
    }
  }]);

  return Leaderboard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    searchResults: state.search.searchResults
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    fetchByUsername: _src_actions__WEBPACK_IMPORTED_MODULE_6__["fetchByUsername"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Leaderboard));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/leaderboard")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=leaderboard.js.885e84d5f6c6e18e5bf4.hot-update.js.map