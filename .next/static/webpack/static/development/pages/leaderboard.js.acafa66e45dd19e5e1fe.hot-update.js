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
              return Object(_actions__WEBPACK_IMPORTED_MODULE_6__["getUsernames"])(debouncedSearchTerm);

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

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      fetch();
    } else {
      resetComponent();
    }
  }, [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  var resetComponent = function resetComponent() {
    setSearchTerm('');
    setIsSearching(false);
    setResults([]);
  };

  var onResultSelect = function onResultSelect(e, _ref3) {
    var result = _ref3.result;
    setSearchTerm(result.username);
    handleResultSelect(result.username);
    setSearchTerm('');
  };

  var onSearchChange = function onSearchChange(e, _ref4) {
    var value = _ref4.value;
    setIsSearching(true);
    setSearchTerm(value);
    if (searchTerm.length < 1) return resetComponent();
  };

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

/* harmony default export */ __webpack_exports__["default"] = (SearchBar); // // //////////////////////////////////////////////////////////
// // Usage
// function App() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [results, setResults] = useState([]);
//     const [isSearching, setIsSearching] = useState(false);
//     const debouncedSearchTerm = useDebounce(searchTerm, 500);
//     // Effect for API call
//     useEffect(
//         () => {
//             if (debouncedSearchTerm) {
//                 setIsSearching(true);
//                 searchCharacters(debouncedSearchTerm).then(results => {
//                     setIsSearching(false);
//                     setResults(results);
//                 });
//             } else {
//                 setResults([]);
//             }
//         },
//         [debouncedSearchTerm] // Only call effect if debounced search term changes
//     );
//     return (
//         <div>
//             <input
//                 placeholder="Search Marvel Comics"
//                 onChange={e => setSearchTerm(e.target.value)}
//             />
//             {isSearching && <div>Searching ...</div>}
//             {results.map(result => (
//                 <div key={result.id}>
//                     <h4>{result.title}</h4>
//                     <img
//                         src={`${result.thumbnail.path}/portrait_incredible.${
//                             result.thumbnail.extension
//                         }`}
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// }
// // API search function
// function searchCharacters(search) {
//     const apiKey = 'f9dfb1e8d466d36c27850bedd2047687';
//     return fetch(
//         `https://gateway.marvel.com/v1/public/comics?apikey=${apiKey}&titleStartsWith=${search}`,
//         {
//             method: 'GET'
//         }
//     )
//         .then(r => r.json())
//         .then(r => r.data.results)
//         .catch(error => {
//             console.error(error);
//             return [];
//         });
// }
// // Hook

function useDebounce(value, delay) {
  // State and setters for debounced value
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(value),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      debouncedValue = _useState8[0],
      setDebouncedValue = _useState8[1];

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
//# sourceMappingURL=leaderboard.js.acafa66e45dd19e5e1fe.hot-update.js.map