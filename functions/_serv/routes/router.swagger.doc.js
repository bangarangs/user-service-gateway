"use strict";

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var options = {
  swaggerDefinition: {
    info: {
      title: 'User Service Gateway',
      version: '1.0.0',
      description: 'Provides basic user service and storage to 3rd parties'
    },
    basePath: '/api-docs'
  },
  apis: [__dirname + './index.js']
};
var specs = (0, _swaggerJsdoc["default"])(options);

module.exports = function (app) {
  app.use('/api-docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
};