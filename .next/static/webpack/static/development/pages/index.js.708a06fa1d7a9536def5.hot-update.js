webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _src_components_SearchBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/SearchBar */ "./src/components/SearchBar.js");
/* harmony import */ var _src_components_News__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/News */ "./src/components/News/index.js");
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/actions */ "./src/actions/index.js");















var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "initNews",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_src_actions__WEBPACK_IMPORTED_MODULE_13__["getNews"])();

            case 2:
              data = _context.sent;

              _this.setState({
                news: data.entries.slice(0, 3)
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "changeRoute", function (player) {
      var router = _this.props.router;
      router.push("/profile/".concat(player.username));
    });

    _this.state = {
      news: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initNews();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        textAlign: "center",
        style: {
          paddingTop: '100px',
          paddingBottom: '100px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        centered: true,
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, {
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"],
        columns: "1",
        className: "clear-panel"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", null, "Fortnite Boards")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        text: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "Welcome!"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        as: "h6"
      }, "Search and view player stats by battle tag:"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        mobile: "16",
        computer: "6",
        largeScreen: "6",
        tablet: "6",
        widescreen: "6",
        style: {
          paddingBottom: '1em',
          paddingTop: '1em'
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_components_SearchBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        handleResultSelect: this.changeRoute
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        text: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        as: "h6"
      }, "...or build your own Leaderboard and share to your friends!")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, {
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"],
        className: "clear-panel"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "News")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_components_News__WEBPACK_IMPORTED_MODULE_12__["default"], {
        itemsPerRow: 3,
        maxItems: 3
      })))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.708a06fa1d7a9536def5.hot-update.js.map