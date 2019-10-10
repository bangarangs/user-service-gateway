'use strict';

var _server = _interopRequireDefault(require("react-dom/server"));

var _index = require("../util/index");

var _styles = require("@material-ui/styles");

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _index2 = require("../index");

var _container = _interopRequireDefault(require("../../_src/containers/container.payment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _require = require('express-validator'),
    check = _require.check,
    validationResult = _require.validationResult;

/* ************ *
 * :: ROUTES :: *
 * ************ */
var router = _express["default"].Router();
/* GET QrCode React Component. */


router.get('/', [check()], function (req, res) {
  // Handle Validation
  var errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
  } // Handle Cache


  res.set('Cache-Control', 'public, max-age=300, s-max-age=6000'); // Server Side Render w/ Styles

  router.use(handleRender(req, res));
});
module.exports = {
  router: router
};
/* *************** *
 * :: FUNCTIONS :: *
 * *************** */

function handleRender(req, res) {
  var sheets = new _styles.ServerStyleSheets(); // Render the component to a string.

  var html = _server["default"].renderToString(sheets.collect(_react["default"].createElement(_styles.ThemeProvider, {
    theme: _index2.theme.main
  }, _react["default"].createElement(_container["default"], null)))); // Grab the CSS from the sheets.


  var css = sheets.toString(); // Send the rendered page back to the client.

  res.send((0, _index.renderFullPage)('Qr Code', html, css));
}