webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/SearchBar.js":
/*!*************************************!*\
  !*** ./src/components/SearchBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useDebounce */ "./src/hooks/useDebounce.js");








var resultRenderer = function resultRenderer(_ref) {
  var uid = _ref.uid,
      username = _ref.username;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    key: uid,
    content: username
  });
};

var SearchBar = function SearchBar(_ref2) {
  var handleResultSelect = _ref2.handleResultSelect;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      searchTerm = _useState2[0],
      setSearchTerm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      results = _useState4[0],
      setResults = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      isSearching = _useState6[0],
      setIsSearching = _useState6[1];

  var debouncedSearchTerm = Object(_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_6__["useDebounce"])(searchTerm, 300);

  function fetch() {
    return _fetch.apply(this, arguments);
  }

  function _fetch() {
    _fetch = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, formattedResults;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getUsernames"])(debouncedSearchTerm);

            case 2:
              response = _context.sent;
              formattedResults = response.map(function (result, index) {
                result.key = index;
                result.title = result.username;
                return result;
              });
              setResults(formattedResults);
              setIsSearching(false);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return _fetch.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      fetch();
    } else {
      resetComponent();
    }
  }, [debouncedSearchTerm]);

  var resetComponent = function resetComponent() {
    setSearchTerm('');
    setIsSearching(false);
    setResults([]);
  };

  var onResultSelect = function onResultSelect(e, _ref3) {
    var result = _ref3.result;
    setSearchTerm(result.username);
    handleResultSelect(result);
    resetComponent();
  };

  var onSearchChange = function onSearchChange(e, _ref4) {
    var value = _ref4.value;
    if (!value.length) return resetComponent();
    setIsSearching(true);
    setSearchTerm(value);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Search"], {
    input: {
      fluid: true,
      icon: 'arrow circle right'
    },
    loading: isSearching,
    placeholder: 'Enter your Epic username',
    onResultSelect: onResultSelect,
    onSearchChange: onSearchChange,
    results: results,
    resultRenderer: resultRenderer,
    value: searchTerm,
    showNoResults: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ })

})
//# sourceMappingURL=index.js.f4d11a2359881c3a2791.hot-update.js.map