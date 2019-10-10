"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ContainerPayment(props) {
  return _react["default"].createElement(_Button["default"], {
    variant: "contained",
    color: "primary"
  }, "Payment");
}

var _default = ContainerPayment;
exports["default"] = _default;