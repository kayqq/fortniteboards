webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./src/components/Profile/StatsTable.js":
/*!**********************************************!*\
  !*** ./src/components/Profile/StatsTable.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    raised: true,
    fluid: true,
    style: {
      backgroundColor: '#6c80a2'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    style: {
      backgroundColor: backgroundColor
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, mode)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    columns: "5",
    stretched: true,
    style: {
      height: '80px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    className: "compact",
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "tiny",
    style: {
      color: 'white'
    }
  }, kd, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    style: {
      color: '#92a2bd'
    }
  }, "K/D"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    className: "compact",
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "tiny",
    style: {
      color: 'white'
    }
  }, wins, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    style: {
      color: '#92a2bd'
    }
  }, "Wins"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    className: "compact",
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "tiny",
    style: {
      color: 'white'
    }
  }, kills, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    style: {
      color: '#92a2bd'
    }
  }, "Kills"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    className: "compact",
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "tiny",
    style: {
      color: 'white'
    }
  }, winrate, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    style: {
      color: '#92a2bd'
    }
  }, "Win %"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    className: "compact",
    textAlign: "center",
    verticalAlign: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    size: "tiny",
    style: {
      color: 'white'
    }
  }, matches, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    style: {
      color: '#92a2bd'
    }
  }, "Matches")))))) // <Grid style={{ backgroundColor: '#2c3c57', color: 'white' }}>
  //     <Grid.Row style={{ backgroundColor }}>
  //         <Grid.Column>{mode}</Grid.Column>
  //     </Grid.Row>
  //     <Grid.Row columns="5" stretched style={{ height: '80px' }}>
  //         <Grid.Column className="compact" textAlign="center" verticalAlign="middle">
  //             <Header size="tiny" style={{ color: 'white' }}>
  //                 {kd}
  //                 <Header.Subheader style={{ color: '#92a2bd' }}>K/D</Header.Subheader>
  //             </Header>
  //         </Grid.Column>
  //         <Grid.Column className="compact" textAlign="center" verticalAlign="middle">
  //             <Header size="tiny" style={{ color: 'white' }}>
  //                 {wins}
  //                 <Header.Subheader style={{ color: '#92a2bd' }}>Wins</Header.Subheader>
  //             </Header>
  //         </Grid.Column>
  //         <Grid.Column className="compact" textAlign="center" verticalAlign="middle">
  //             <Header size="tiny" style={{ color: 'white' }}>
  //                 {kills}
  //                 <Header.Subheader style={{ color: '#92a2bd' }}>Kills</Header.Subheader>
  //             </Header>
  //         </Grid.Column>
  //         <Grid.Column className="compact" textAlign="center" verticalAlign="middle">
  //             <Header size="tiny" style={{ color: 'white' }}>
  //                 {winrate}
  //                 <Header.Subheader style={{ color: '#92a2bd' }}>Win %</Header.Subheader>
  //             </Header>
  //         </Grid.Column>
  //         <Grid.Column className="compact" textAlign="center" verticalAlign="middle">
  //             <Header size="tiny" style={{ color: 'white' }}>
  //                 {matches}
  //                 <Header.Subheader style={{ color: '#92a2bd' }}>Matches</Header.Subheader>
  //             </Header>
  //         </Grid.Column>
  //     </Grid.Row>
  // </Grid>
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (StatsTable);

/***/ })

})
//# sourceMappingURL=profile.js.7718d2205dd1e471bfb0.hot-update.js.map