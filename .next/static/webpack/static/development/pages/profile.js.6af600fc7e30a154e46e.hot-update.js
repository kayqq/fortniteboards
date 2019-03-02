webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: getUsernames, getUidByUsername, getStatsByUid, getMatchesByUid, getStatsByUsername, getProfileByUsername, getNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsernames", function() { return getUsernames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUidByUsername", function() { return getUidByUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatsByUid", function() { return getStatsByUid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatchesByUid", function() { return getMatchesByUid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatsByUsername", function() { return getStatsByUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileByUsername", function() { return getProfileByUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNews", function() { return getNews; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
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
var getUidByUsername =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(username) {
    var endPoint, response, uid;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            endPoint = "/users/id?username=".concat(username);
            _context2.next = 3;
            return axiosInstance.get(endPoint);

          case 3:
            response = _context2.sent;
            uid = response.data.uid;
            return _context2.abrupt("return", uid);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getUidByUsername(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getStatsByUid =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(uid) {
    var platform,
        window,
        endPoint,
        response,
        _args3 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            platform = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 'pc';
            window = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 'season7';
            endPoint = "/users/public/br_stats?user_id=".concat(uid, "&platform=").concat(platform, "&window=").concat(window);
            _context3.next = 5;
            return axiosInstance.get(endPoint);

          case 5:
            response = _context3.sent;
            return _context3.abrupt("return", response.data);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getStatsByUid(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var getMatchesByUid =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(uid) {
    var endPoint, response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            endPoint = "/users/public/matches_v2?user_id=".concat(uid);
            _context4.next = 3;
            return axiosInstance.get(endPoint);

          case 3:
            response = _context4.sent;
            return _context4.abrupt("return", response.data.matches);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getMatchesByUid(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var getStatsByUsername =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(username) {
    var platform,
        window,
        uid,
        response,
        _args5 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            platform = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : 'pc';
            window = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : 'season7';
            _context5.next = 4;
            return getUidByUsername(username);

          case 4:
            uid = _context5.sent;
            _context5.next = 7;
            return getStatsByUid(uid, platform, window);

          case 7:
            response = _context5.sent;
            return _context5.abrupt("return", response);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getStatsByUsername(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
var getProfileByUsername =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(username) {
    var platform,
        window,
        uid,
        responseMatches,
        responseStats,
        reponses,
        profile,
        _args6 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            platform = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : 'pc';
            window = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : 'season7';
            _context6.next = 4;
            return getUidByUsername(username);

          case 4:
            uid = _context6.sent;
            // Async requests
            responseMatches = getMatchesByUid(uid);
            responseStats = getStatsByUid(uid, platform, window); // Await till all promises are resolved

            _context6.t0 = _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"];
            _context6.t1 = {};
            _context6.next = 11;
            return responseStats;

          case 11:
            _context6.t2 = _context6.sent;
            _context6.next = 14;
            return responseMatches;

          case 14:
            _context6.t3 = _context6.sent;
            _context6.t4 = {
              matches: _context6.t3
            };
            reponses = (0, _context6.t0)(_context6.t1, _context6.t2, _context6.t4);
            profile = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reponses.profile, {
              matches: reponses.matches
            });
            return _context6.abrupt("return", profile);

          case 19:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function getProfileByUsername(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
var getNews =
/*#__PURE__*/
function () {
  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
    var language,
        endPoint,
        response,
        _args7 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            language = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : 'en';
            endPoint = "/br_motd/get?language=".concat(language);
            _context7.next = 4;
            return axiosInstance.get(endPoint);

          case 4:
            response = _context7.sent;
            return _context7.abrupt("return", response.data);

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function getNews() {
    return _ref7.apply(this, arguments);
  };
}(); // V2

/***/ })

})
//# sourceMappingURL=profile.js.6af600fc7e30a154e46e.hot-update.js.map