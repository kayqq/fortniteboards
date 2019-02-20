webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./src/components/board/StatsHeader.js":
/*!*********************************************!*\
  !*** ./src/components/board/StatsHeader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");




var StatsHeader = function StatsHeader(_ref) {
  var _React$createElement;

  var columns = _ref.columns,
      activeColumnSort = _ref.activeColumnSort,
      sortPlayers = _ref.sortPlayers;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
    as: TableHeader,
    columns: columns.length,
    stretched: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, (_React$createElement = {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["TableHeaderCell"],
    style: {
      backgroundColor: activeColumnSort == '#' ? 'black' : '#2c3c57'
    }
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "as", semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "textAlign", "center"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "verticalAlign", "middle"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "mobile", "1"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "onClick", function onClick() {
    sortPlayers('#');
  }), _React$createElement), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    size: "tiny"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"].Subheader, {
    as: "h6",
    style: {
      color: activeColumnSort == '#' ? 'yellow' : '#92a2bd'
    }
  }, "#"))), columns.map(function (column, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      style: {
        backgroundColor: activeColumnSort == column.header ? 'black' : '#2c3c57'
      },
      as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell,
      className: index == 0 ? '' : 'compact',
      key: index,
      onClick: function onClick() {
        sortPlayers(column.header);
      },
      textAlign: index == 0 ? 'left' : 'center',
      verticalAlign: "middle",
      mobile: column.size
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      size: "tiny"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"].Subheader, {
      as: "h6",
      style: {
        color: activeColumnSort == column.header ? 'yellow' : '#92a2bd'
      }
    }, column.header)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StatsHeader);

/***/ })

})
//# sourceMappingURL=leaderboard.js.e962f4faed94f8ce34d0.hot-update.js.map