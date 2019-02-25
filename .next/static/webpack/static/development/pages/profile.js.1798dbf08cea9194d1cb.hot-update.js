webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/actions */ "./src/actions/index.js");











var StatsTable = function StatsTable(_ref) {
  var kd = _ref.kd,
      kills = _ref.kills,
      wins = _ref.wins,
      winrate = _ref.winrate,
      matches = _ref.matches,
      mode = _ref.mode;
  var backgroundColor = '';

  switch (mode) {
    case 'SOLO':
      backgroundColor = '#14c8ff';
      break;

    case 'DUO':
      backgroundColor = '#f3af19';
      break;

    case 'SQUAD':
      backgroundColor = '#9d4dbb';
      break;

    default:
      break;
  }

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    style: {
      backgroundColor: '#2c3c57',
      color: 'white'
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, {
    style: {
      backgroundColor: backgroundColor
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, null, mode)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, {
    columns: "5",
    stretched: true
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
    size: "medium",
    style: {
      color: 'white'
    }
  }, kd, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"].Subheader, {
    style: {
      color: '#92a2bd'
    }
  }, "K/D"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
    size: "medium",
    style: {
      color: 'white'
    }
  }, wins, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"].Subheader, {
    style: {
      color: '#92a2bd'
    }
  }, "Wins"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
    size: "medium",
    style: {
      color: 'white'
    }
  }, kills, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"].Subheader, {
    style: {
      color: '#92a2bd'
    }
  }, "Kills"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
    size: "medium",
    style: {
      color: 'white'
    }
  }, winrate, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"].Subheader, {
    style: {
      color: '#92a2bd'
    }
  }, "Win %"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
    size: "medium",
    style: {
      color: 'white'
    }
  }, matches, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"].Subheader, {
    style: {
      color: '#92a2bd'
    }
  }, "Matches")))));
};

var Profile =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Profile, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Profile, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
        var store, query, pathname, asPath, req, profile, err;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref2.store, query = _ref2.query, pathname = _ref2.pathname, asPath = _ref2.asPath, req = _ref2.req;
                _context.next = 3;
                return Object(_src_actions__WEBPACK_IMPORTED_MODULE_9__["getProfileByUsername"])(query.username);

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
                err.code = 'ENOENT';
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

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Profile);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Profile).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Profile, [{
    key: "render",
    value: function render() {
      var profile = this.props.profile;
      var stats = profile.stats,
          totals = profile.totals;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        text: true,
        style: {
          marginTop: '1em'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        style: {
          backgroundColor: '#2c3c57',
          color: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, {
        stretched: true,
        style: {
          backgroundColor: '#6c80a2'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        as: "h1",
        style: {
          color: 'white'
        }
      }, profile.username, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"].Subheader, null, "Season 7"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, null, totals.matchesplayed, " Matches"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, {
        style: {
          height: '200px'
        },
        columns: "2"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        size: "medium",
        style: {
          color: 'white'
        }
      }, totals.wins, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"].Subheader, {
        style: {
          color: '#92a2bd'
        }
      }, "Wins"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        size: "medium",
        style: {
          color: 'white'
        }
      }, totals.winrate, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"].Subheader, {
        style: {
          color: '#92a2bd'
        }
      }, "Win %"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        size: "medium",
        style: {
          color: 'white'
        }
      }, totals.kills, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"].Subheader, {
        style: {
          color: '#92a2bd'
        }
      }, "Kills"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        textAlign: "center",
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        size: "medium",
        style: {
          color: 'white'
        }
      }, totals.kd, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"].Subheader, {
        style: {
          color: '#92a2bd'
        }
      }, "K/D"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
        hidden: true
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StatsTable, {
        kd: stats.kd_solo,
        kills: stats.kills_solo,
        wins: stats.placetop1_solo,
        winrate: stats.winrate_solo,
        matches: stats.matchesplayed_solo,
        mode: "SOLO"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
        hidden: true
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StatsTable, {
        kd: stats.kd_duo,
        kills: stats.kills_duo,
        wins: stats.placetop1_duo,
        winrate: stats.winrate_duo,
        matches: stats.matchesplayed_duo,
        mode: "DUO"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
        hidden: true
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StatsTable, {
        kd: stats.kd_squad,
        kills: stats.kills_squad,
        wins: stats.placetop1_squad,
        winrate: stats.winrate_squad,
        matches: stats.matchesplayed_squad,
        mode: "SQUAD"
      })));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: getUsernames, getProfileByUsername, getProfileByUid, getNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsernames", function() { return getUsernames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileByUsername", function() { return getProfileByUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileByUid", function() { return getProfileByUid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNews", function() { return getNews; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var getUsernames =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(username) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://fortnite-public-api.theapinetwork.com/prod09/users/search", {
              params: {
                username: username
              }
            });

          case 2:
            response = _context.sent;
            console.log(response.data.entries);
            return _context.abrupt("return", response.data.entries);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUsernames(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getProfileByUsername =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(username) {
    var platform,
        window,
        response,
        uid,
        _args2 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            platform = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 'pc';
            window = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 'season7';
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://fortnite-public-api.theapinetwork.com/prod09/users/id', {
              params: {
                username: username
              }
            });

          case 4:
            response = _context2.sent;
            uid = response.data.uid;
            _context2.next = 8;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats", {
              params: {
                user_id: uid,
                platform: platform,
                window: window
              }
            });

          case 8:
            response = _context2.sent;
            return _context2.abrupt("return", response.data);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getProfileByUsername(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getProfileByUid =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(uid) {
    var platform,
        window,
        response,
        _args3 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            platform = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 'pc';
            window = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 'season7';
            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats", {
              params: {
                user_id: uid,
                platform: platform,
                window: window
              }
            });

          case 4:
            response = _context3.sent;
            return _context3.abrupt("return", response.data);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getProfileByUid(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var getNews =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    var language,
        response,
        _args4 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            language = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : 'en';
            _context4.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://fortnite-public-api.theapinetwork.com/prod09/br_motd/get', {
              params: {
                language: language
              }
            });

          case 3:
            response = _context4.sent;
            return _context4.abrupt("return", response.data);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getNews() {
    return _ref4.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=profile.js.1798dbf08cea9194d1cb.hot-update.js.map