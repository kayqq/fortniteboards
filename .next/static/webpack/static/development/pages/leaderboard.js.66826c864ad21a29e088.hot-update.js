webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./src/components/Board/index.js":
/*!***************************************!*\
  !*** ./src/components/Board/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ModeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModeHeader */ "./src/components/Board/ModeHeader.js");
/* harmony import */ var _StatsHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatsHeader */ "./src/components/Board/StatsHeader.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Player */ "./src/components/Board/Player.js");






var Index = function Index(_ref) {
  var activeColumn = _ref.activeColumn,
      columns = _ref.columns,
      players = _ref.players,
      removePlayer = _ref.removePlayer,
      handleModeChange = _ref.handleModeChange,
      mode = _ref.mode,
      loading = _ref.loading;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    style: {
      backgroundColor: 'rgba(61, 74, 133, 0.3)',
      color: 'white'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModeHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    mode: mode,
    handleModeChange: handleModeChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatsHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activeColumn: activeColumn,
    columns: columns,
    loading: loading
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dimmer"].Dimmable, {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row,
    dimmed: loading,
    style: {
      backgroundColor: '#2c3c57',
      color: 'white',
      padding: '0',
      margin: '0'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dimmer"], {
    active: loading
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Loader"], null, "Loading...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    style: {
      width: '100%',
      margin: '0',
      padding: '0'
    }
  }, players.map(function (player, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Player__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      columns: columns,
      player: player,
      mode: mode,
      boardIndex: index,
      removePlayer: removePlayer
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
{
  /* <React.Fragment>
          <Grid
              style={{
                  backgroundColor: '#2c3c57',
                  color: 'white',
                  borderTopLeftRadius: '0.28571429rem',
                  borderTopRightRadius: '0.28571429rem'
              }}
          >
              <ModeHeader mode={mode} handleModeChange={handleModeChange} />
          </Grid>
           <Dimmer.Dimmable
              as={Grid}
              dimmed={loading}
              style={{ backgroundColor: '#2c3c57', color: 'white' }}
          >
              <Dimmer active={loading}>
                  <Loader>Loading...</Loader>
              </Dimmer>
              <StatsHeader activeColumn={activeColumn} columns={columns} />
               {players.map((player, index) => (
                  <Player
                      key={index}
                      columns={columns}
                      player={player}
                      mode={mode}
                      boardIndex={index}
                      removePlayer={removePlayer}
                  />
              ))}
          </Dimmer.Dimmable>
      </React.Fragment> */
}

/***/ })

})
//# sourceMappingURL=leaderboard.js.66826c864ad21a29e088.hot-update.js.map