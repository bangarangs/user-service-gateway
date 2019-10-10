"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = void 0;

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _path = _interopRequireDefault(require("path"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("./swagger.json"));

var _styles = require("@material-ui/styles");

var _index = _interopRequireDefault(require("./_serv/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var functions = require('firebase-functions');

// import swaggerDoc from './routes/swaggerDoc';
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])()); // Logging

app.use((0, _morgan["default"])('dev')); // Routers

(0, _index["default"])(app); // Swagger
// swaggerDoc(app);

app.use('/api-docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"])); // Cors

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');

  if (req.method === 'OPTIONS') {
    return res.send(204);
  }

  next();
}); // Not Found

app.use('*', function (req, res) {
  return res.status(404).json({
    message: 'Not Found'
  });
});
var api = functions.https.onRequest(app);
exports.api = api;