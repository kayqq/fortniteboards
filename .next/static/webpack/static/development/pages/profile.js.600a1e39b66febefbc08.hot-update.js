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
/* harmony import */ var _src_components_Profile_ProfileHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/Profile/ProfileHeader */ "./src/components/Profile/ProfileHeader.js");
/* harmony import */ var _src_components_Profile_StatsTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/Profile/StatsTable */ "./src/components/Profile/StatsTable.js");
/* harmony import */ var _src_components_Profile_TotalStatsTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/Profile/TotalStatsTable */ "./src/components/Profile/TotalStatsTable.js");














var Profile =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Profile, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Profile, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, profile, err;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
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
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Profile);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Profile).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Profile, [{
    key: "render",
    value: function render() {
      var profile = this.props.profile;
      var stats = profile.stats,
          totals = profile.totals;
      var season = profile.window.charAt(profile.window.length - 1);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        text: true,
        style: {
          paddingTop: '100px',
          paddingBottom: '100px',
          height: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_Profile_ProfileHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
        username: profile.username,
        season: season,
        matches: totals.matchesplayed
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_Profile_TotalStatsTable__WEBPACK_IMPORTED_MODULE_12__["default"], {
        username: profile.username,
        season: season,
        kd: totals.kd,
        kills: totals.kills,
        wins: totals.wins,
        winrate: totals.winrate,
        matches: totals.matchesplayed
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_Profile_StatsTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
        kd: stats.kd_solo,
        kills: stats.kills_solo,
        wins: stats.placetop1_solo,
        winrate: stats.winrate_solo,
        matches: stats.matchesplayed_solo,
        mode: "SOLO"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_Profile_StatsTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
        kd: stats.kd_duo,
        kills: stats.kills_duo,
        wins: stats.placetop1_duo,
        winrate: stats.winrate_duo,
        matches: stats.matchesplayed_duo,
        mode: "DUO"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_Profile_StatsTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
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

/***/ "./src/components/Profile/ProfileHeader.js":
/*!*************************************************!*\
  !*** ./src/components/Profile/ProfileHeader.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



var ProfileHeader = function ProfileHeader(_ref) {
  var username = _ref.username,
      season = _ref.season,
      matches = _ref.matches;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    raised: true,
    fluid: true,
    style: {
      backgroundColor: '#6c80a2'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    bordered: true,
    floated: "right",
    size: "tiny",
    src: "https://pm1.narvii.com/6918/222ae5aa45c92f4ce6b86e39d3be5c0385473d9er1-928-760v2_hq.jpg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h1",
    style: {
      color: 'white'
    }
  }, username, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, null, "Season ", season))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, null, matches, " Matches"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileHeader);

/***/ })

})
//# sourceMappingURL=profile.js.600a1e39b66febefbc08.hot-update.js.map