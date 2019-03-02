webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: getUsernames, getStatsByUsername, getProfileByUsername, getProfileByUid, getNews, getMatchesByUid, getStatsByUid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsernames", function() { return getUsernames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatsByUsername", function() { return getStatsByUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileByUsername", function() { return getProfileByUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileByUid", function() { return getProfileByUid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNews", function() { return getNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatchesByUid", function() { return getMatchesByUid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatsByUid", function() { return getStatsByUid; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_3___default.a.create({
  baseURL: "https://fortnite-public-api.theapinetwork.com/prod09"
}); // const onDownloadProgress = {
//     onDownloadProgress: progressEvent => {
//         let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//         console.log(progressEvent.lengthComputable);
//         console.log(percentCompleted);
//     }
// };
// V1

var getUsernames =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(username) {
    var endPoint, response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            endPoint = "/users/search?username=".concat(username);
            _context.next = 3;
            return axiosInstance.get(endPoint);

          case 3:
            response = _context.sent;
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
var getStatsByUsername =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(username) {
    var platform,
        window,
        endPoint,
        response,
        uid,
        _args2 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            platform = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 'pc';
            window = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 'season7';
            endPoint = "/users/id?username=".concat(username, "&platform=").concat(platform, "&window=").concat(window);
            _context2.next = 5;
            return axiosInstance.get(endPoint);

          case 5:
            response = _context2.sent;
            uid = response.data.uid;
            endPoint = "/users/public/br_stats?user_id=".concat(uid, "&platform=").concat(platform, "&window=").concat(window);
            _context2.next = 10;
            return axiosInstance.get(endPoint);

          case 10:
            response = _context2.sent;
            return _context2.abrupt("return", response.data);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getStatsByUsername(_x2) {
    return _ref2.apply(this, arguments);
  };
}(); // MAKE QUERIES RUN IN PARALLEL

var getProfileByUsername =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(username) {
    var platform,
        window,
        endPoint,
        response,
        uid,
        responseMatches,
        responseStats,
        _args3 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            platform = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 'pc';
            window = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 'season7';
            endPoint = "/users/id?username=".concat(username, "&platform=").concat(platform, "&window=").concat(window);
            _context3.next = 5;
            return axiosInstance.get(endPoint);

          case 5:
            response = _context3.sent;
            uid = response.data.uid;
            responseMatches = getMatchesByUid(uid);
            responseStats = getStatsByUid(uid);
            _context3.next = 11;
            return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all([responseStats, responseMatches]);

          case 11:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getProfileByUsername(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var getProfileByUid =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(uid) {
    var platform,
        window,
        endPoint,
        response,
        _args4 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            platform = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 'pc';
            window = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : 'season7';
            endPoint = "/users/public/br_stats?user_id=".concat(uid, "&platform=").concat(platform, "&window=").concat(window);
            _context4.next = 5;
            return axiosInstance.get(endPoint);

          case 5:
            response = _context4.sent;
            return _context4.abrupt("return", response.data);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getProfileByUid(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var getNews =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
    var language,
        endPoint,
        response,
        _args5 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            language = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : 'en';
            endPoint = "/br_motd/get?language=".concat(language);
            _context5.next = 4;
            return axiosInstance.get(endPoint);

          case 4:
            response = _context5.sent;
            return _context5.abrupt("return", response.data);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getNews() {
    return _ref5.apply(this, arguments);
  };
}();
var getMatchesByUid =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(uid) {
    var endPoint, response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            endPoint = "/users/public/matches_v2?user_id=".concat(uid);
            console.log('getting matches');
            _context6.next = 4;
            return axiosInstance.get(endPoint);

          case 4:
            response = _context6.sent;
            console.log('got matches');
            return _context6.abrupt("return", response.data);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function getMatchesByUid(_x5) {
    return _ref6.apply(this, arguments);
  };
}();
var getStatsByUid =
/*#__PURE__*/
function () {
  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(uid) {
    var platform,
        window,
        endPoint,
        response,
        _args7 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            platform = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : 'pc';
            window = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : 'season7';
            endPoint = "/users/public/br_stats?user_id=".concat(uid, "&platform=").concat(platform, "&window=").concat(window);
            console.log('getting stats');
            _context7.next = 6;
            return axiosInstance.get(endPoint);

          case 6:
            response = _context7.sent;
            console.log('got stats');
            return _context7.abrupt("return", response.data);

          case 9:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function getStatsByUid(_x6) {
    return _ref7.apply(this, arguments);
  };
}(); // V2

/***/ })

})
//# sourceMappingURL=leaderboard.js.ca0602cc11fe1dd5dc74.hot-update.js.map