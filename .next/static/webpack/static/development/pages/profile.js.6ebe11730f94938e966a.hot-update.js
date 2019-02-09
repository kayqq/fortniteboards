webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src//actions */ "./src/actions/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var StatsTable = function StatsTable(_ref) {
  var kd = _ref.kd,
      kills = _ref.kills,
      wins = _ref.wins,
      winrate = _ref.winrate,
      matches = _ref.matches,
      mode = _ref.mode;
  var backgroundColor = "";

  switch (mode) {
    case "SOLO":
      backgroundColor = "#14c8ff";
      break;

    case "DUO":
      backgroundColor = "#f3af19";
      break;

    case "SQUAD":
      backgroundColor = "#9d4dbb";
      break;

    default:
      break;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    style: {
      backgroundColor: "#2c3c57",
      color: "white"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    style: {
      backgroundColor: backgroundColor
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, mode)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    columns: "5",
    stretched: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    size: "medium",
    style: {
      color: "white"
    }
  }, kd, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, {
    style: {
      color: "#92a2bd"
    }
  }, "K/D"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    size: "medium",
    style: {
      color: "white"
    }
  }, wins, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, {
    style: {
      color: "#92a2bd"
    }
  }, "Wins"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    size: "medium",
    style: {
      color: "white"
    }
  }, kills, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, {
    style: {
      color: "#92a2bd"
    }
  }, "Kills"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    size: "medium",
    style: {
      color: "white"
    }
  }, winrate, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, {
    style: {
      color: "#92a2bd"
    }
  }, "Win %"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    size: "medium",
    style: {
      color: "white"
    }
  }, matches, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, {
    style: {
      color: "#92a2bd"
    }
  }, "Matches")))));
};

var Profile =
/*#__PURE__*/
function (_Component) {
  _inherits(Profile, _Component);

  _createClass(Profile, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
        var store, query, pathname, asPath, req, profile, err;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref2.store, query = _ref2.query, pathname = _ref2.pathname, asPath = _ref2.asPath, req = _ref2.req;
                _context.next = 3;
                return Object(_src_actions__WEBPACK_IMPORTED_MODULE_4__["getProfile"])(query.username);

              case 3:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 6;
                  break;
                }

                _context.t0 = {};

              case 6:
                profile = _context.t0;

                if (profile.uid) {
                  _context.next = 11;
                  break;
                }

                err = new Error();
                err.code = "ENOENT";
                throw err;

              case 11:
                return _context.abrupt("return", {
                  profile: profile
                });

              case 12:
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

  function Profile(props) {
    var _this;

    _classCallCheck(this, Profile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Profile).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderStatsSection", function (kd, kills, wins, winrate, matches, mode) {
      var backgroundColor = "";

      switch (mode) {
        case "SOLO":
          backgroundColor = "#14c8ff";
          break;

        case "DUO":
          backgroundColor = "#f3af19";
          break;

        case "SQUAD":
          backgroundColor = "#9d4dbb";
          break;

        default:
          break;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        style: {
          backgroundColor: "#2c3c57",
          color: "white"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
        style: {
          backgroundColor: backgroundColor
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, mode)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
        columns: "5",
        stretched: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        size: "medium",
        style: {
          color: "white"
        }
      }, kd, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, {
        style: {
          color: "#92a2bd"
        }
      }, "K/D"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        size: "medium",
        style: {
          color: "white"
        }
      }, wins, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, {
        style: {
          color: "#92a2bd"
        }
      }, "Wins"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        size: "medium",
        style: {
          color: "white"
        }
      }, kills, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, {
        style: {
          color: "#92a2bd"
        }
      }, "Kills"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        size: "medium",
        style: {
          color: "white"
        }
      }, winrate, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, {
        style: {
          color: "#92a2bd"
        }
      }, "Win %"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        size: "medium",
        style: {
          color: "white"
        }
      }, matches, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, {
        style: {
          color: "#92a2bd"
        }
      }, "Matches")))));
    });

    _this.state = {};
    return _this;
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      var profile = this.props.profile;
      var stats = profile.stats;
      var totals = profile.totals;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        text: true,
        style: {
          marginTop: "1em"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        style: {
          backgroundColor: "#2c3c57",
          color: "white"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
        stretched: true,
        style: {
          backgroundColor: "#6c80a2"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h1",
        style: {
          color: "white"
        }
      }, profile.username, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, null, "Season 7"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, totals.matchesplayed, " Matches"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
        style: {
          height: "200px"
        },
        columns: "2"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        size: "medium",
        style: {
          color: "white"
        }
      }, totals.wins, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, {
        style: {
          color: "#92a2bd"
        }
      }, "Wins"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        size: "medium",
        style: {
          color: "white"
        }
      }, totals.winrate, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, {
        style: {
          color: "#92a2bd"
        }
      }, "Win %"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        size: "medium",
        style: {
          color: "white"
        }
      }, totals.kills, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, {
        style: {
          color: "#92a2bd"
        }
      }, "Kills"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        size: "medium",
        style: {
          color: "white"
        }
      }, totals.kd, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"].Subheader, {
        style: {
          color: "#92a2bd"
        }
      }, "K/D"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        hidden: true
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StatsTable, {
        kd: stats.kd_solo,
        kills: stats.kills_solo,
        wins: stats.placetop1_solo,
        winrate: stats.winrate_solo,
        matches: stats.matchesplayed_solo,
        mode: "SOLO"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        hidden: true
      }), this.renderStatsSection(stats.kd_duo, stats.placetop1_duo, stats.kills_duo, stats.winrate_duo, stats.matchesplayed_duo, "DUO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        hidden: true
      }), this.renderStatsSection(stats.kd_squad, stats.placetop1_squad, stats.kills_squad, stats.winrate_squad, stats.matchesplayed_squad, "SQUAD")));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {})(Profile));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/profile")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=profile.js.6ebe11730f94938e966a.hot-update.js.map