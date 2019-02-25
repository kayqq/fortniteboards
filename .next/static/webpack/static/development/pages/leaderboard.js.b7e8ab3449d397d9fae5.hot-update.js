webpackHotUpdate("static/development/pages/leaderboard.js",{

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");








var resultRenderer = function resultRenderer(_ref) {
  var uid = _ref.uid,
      username = _ref.username;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    key: uid,
    content: username
  });
}; // export default class SearchBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: '',
//             isLoading: false
//         };
//     }
//     componentWillMount() {
//         this.resetComponent();
//     }
//     resetComponent = () => this.setState({ isLoading: false, value: '' });
//     handleResultSelect = async (e, { result }) => {
//         const { handleResultSelect } = this.props;
//         this.setState({ value: result.username, isLoading: true });
//         await handleResultSelect(result.username);
//         this.resetComponent();
//     };
//     handleSearchChange = (e, { value }) => {
//         this.setState({ isLoading: true, value }, () => {
//             // reset loading if empty
//             if (this.state.value.length < 1) return this.resetComponent();
//             // fetch users by username
//             this.props.fetchByUsername(this.state.value, () => {
//                 this.setState({ isLoading: false });
//             });
//         });
//     };
//     render() {
//         const { isLoading, value } = this.state;
//         const { results } = this.props;
//         return (
//             <Search
//                 input={{ fluid: true, icon: 'arrow circle right' }}
//                 loading={isLoading}
//                 placeholder={'Enter your Epic username'}
//                 onResultSelect={this.handleResultSelect}
//                 onSearchChange={_.debounce(this.handleSearchChange, 500, {
//                     leading: true
//                 })}
//                 results={results}
//                 resultRenderer={resultRenderer}
//                 value={value}
//                 showNoResults={false}
//             />
//         );
//     }
// }


var SearchBar = function SearchBar(_ref2) {
  var handleResultSelect = _ref2.handleResultSelect;
  console.log('rendering');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      searchTerm = _useState2[0],
      setSearchTerm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      results = _useState4[0],
      setResults = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      isSearching = _useState6[0],
      setIsSearching = _useState6[1];

  var debouncedSearchTerm = useDebounce(searchTerm, 500);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(
  /*#__PURE__*/
  Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _results, formattedResults;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!debouncedSearchTerm) {
              _context.next = 10;
              break;
            }

            setIsSearching(true);
            _context.next = 4;
            return Object(_actions__WEBPACK_IMPORTED_MODULE_6__["getUsernames"])(searchTerm);

          case 4:
            _results = _context.sent;
            formattedResults = _results.map(function (result, index) {
              result.key = index;
              result.title = result.username;
              return result;
            });
            setIsSearching(false);
            setResults(formattedResults);
            _context.next = 11;
            break;

          case 10:
            setResults([]); // resetComponent();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })), [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  var resetComponent = function resetComponent() {
    setSearchTerm('');
    setIsSearching(false);
  };

  var onResultSelect = function onResultSelect(e, _ref4) {
    var result = _ref4.result;
    setSearchTerm(result.username);
    handleResultSelect(result.username); // resetComponent();
  };

  var onSearchChange =
  /*#__PURE__*/
  function () {
    var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e, _ref5) {
      var value;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              value = _ref5.value;
              setSearchTerm(value);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function onSearchChange(_x, _x2) {
      return _ref6.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Search"], {
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

/* harmony default export */ __webpack_exports__["default"] = (SearchBar); // //////////////////////////////////////////////////////////
// Usage

function App() {
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      searchTerm = _useState8[0],
      setSearchTerm = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      results = _useState10[0],
      setResults = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState11, 2),
      isSearching = _useState12[0],
      setIsSearching = _useState12[1];

  var debouncedSearchTerm = useDebounce(searchTerm, 500); // Effect for API call

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      searchCharacters(debouncedSearchTerm).then(function (results) {
        setIsSearching(false);
        setResults(results);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm] // Only call effect if debounced search term changes
  );
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    placeholder: "Search Marvel Comics",
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    }
  }), isSearching && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, "Searching ..."), results.map(function (result) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: result.id
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", null, result.title), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      src: "".concat(result.thumbnail.path, "/portrait_incredible.").concat(result.thumbnail.extension)
    }));
  }));
} // API search function


function searchCharacters(search) {
  var apiKey = 'f9dfb1e8d466d36c27850bedd2047687';
  return fetch("https://gateway.marvel.com/v1/public/comics?apikey=".concat(apiKey, "&titleStartsWith=").concat(search), {
    method: 'GET'
  }).then(function (r) {
    return r.json();
  }).then(function (r) {
    return r.data.results;
  }).catch(function (error) {
    console.error(error);
    return [];
  });
} // Hook


function useDebounce(value, delay) {
  // State and setters for debounced value
  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(value),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState13, 2),
      debouncedValue = _useState14[0],
      setDebouncedValue = _useState14[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // Update debounced value after delay
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return function () {
      clearTimeout(handler);
    };
  }, [value] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

/***/ })

})
//# sourceMappingURL=leaderboard.js.b7e8ab3449d397d9fae5.hot-update.js.map