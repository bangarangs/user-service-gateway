"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _red = _interopRequireDefault(require("@material-ui/core/colors/red"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Create a themeMain instance.
var themeMain = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: _red["default"].A400
    },
    background: {
      "default": '#fff'
    }
  }
});
var _default = themeMain;
exports["default"] = _default;