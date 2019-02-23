webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: fetchByUsername, getUsernames, getProfile, getNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchByUsername", function() { return fetchByUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsernames", function() { return getUsernames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNews", function() { return getNews; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/actions/constants.js");




var fetchByUsername = function fetchByUsername(username, callback) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["FETCH_BY_PLAYERNAME_REQUESTED"]
                });
                _context.prev = 1;
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://fortnite-public-api.theapinetwork.com/prod09/users/search", {
                  params: {
                    username: username
                  }
                });

              case 4:
                response = _context.sent;
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["FETCH_BY_PLAYERNAME_SUCCESS"],
                  payload: response.data.entries
                });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["FETCH_BY_PLAYERNAME_FAILURE"],
                  payload: _context.t0
                });

              case 11:
                callback();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var getUsernames =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(username) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://fortnite-public-api.theapinetwork.com/prod09/users/search", {
              params: {
                username: username
              }
            });

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response.data.entries);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getUsernames(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getProfile =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(username) {
    var platform,
        window,
        response,
        uid,
        _args3 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            platform = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 'pc';
            window = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 'season7';
            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://fortnite-public-api.theapinetwork.com/prod09/users/id', {
              params: {
                username: username
              }
            });

          case 4:
            response = _context3.sent;
            uid = response.data.uid;
            _context3.next = 8;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats", {
              params: {
                user_id: uid,
                platform: platform,
                window: window
              }
            });

          case 8:
            response = _context3.sent;
            return _context3.abrupt("return", response.data);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getProfile(_x3) {
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
//# sourceMappingURL=leaderboard.js.330f6cb639333a609454.hot-update.js.map