const functions = require ('firebase-functions');
import React from 'react';
import express from 'express';
import logger  from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swagger from './swagger.json';
import routers from './_serv/index';
// import swaggerDoc from './routes/swaggerDoc';

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Logging
app.use(logger('dev'));
// Routers
routers(app);
// Swagger
// swaggerDoc(app);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger));
// Cors
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  if (req.method === 'OPTIONS') {
    return res.send(204);
  }
  next();
});
// Not Found
app.use('*', (req, res) => {
  return res.status(404).json({ message: 'Not Found' });
});

export let api = functions.https.onRequest(app);