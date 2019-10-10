import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    info: {
      title: 'User Service Gateway',
      version: '1.0.0',
      description: 'Provides basic user service and storage to 3rd parties'
    },
    basePath: '/api-docs',
  },
  apis: [__dirname + './index.js']
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};