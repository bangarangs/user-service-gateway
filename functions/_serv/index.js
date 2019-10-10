'use strict'; // Routers

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = void 0;

var _router = require("./routes/router.qrcode");

var _router2 = require("./routes/router.payment");

var _theme = _interopRequireDefault(require("./themes/theme.main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (app) {
  app.use('/qrcode', _router.router);
  app.use('/payment', _router2.router);
};
/* ************ *
 * :: THEMES :: *
 * ************ */


var theme = {
  main: _theme["default"]
};
/* ************* *
 * :: MODULES :: *
 * ************* */
// export const module = {
//
// };

/* **************** *
 * :: VALIDATORS :: *
 * **************** */
// import {validatorQrcode} from "./validation/validator.qrcode";
// export const validator = {
//   qrcode: validatorQrcode()
// };

exports.theme = theme;