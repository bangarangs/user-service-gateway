"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.Container = void 0;

var _container = _interopRequireDefault(require("./containers/container.payment"));

var _container2 = _interopRequireDefault(require("./containers/container.qrcode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Container = {
  Payment: _container["default"],
  Qrcode: _container2["default"]
};
exports.Container = Container;
var Component = {};
exports.Component = Component;