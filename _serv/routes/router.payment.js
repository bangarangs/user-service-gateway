'use strict';
import ReactDOMServer from 'react-dom/server';
import {renderFullPage} from '../util/index';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import React from "react";
import express from 'express';
import {theme} from '../index'
const { check, validationResult } = require('express-validator');

import ContainerPayment from "../../_src/containers/container.payment";

/* ************ *
 * :: ROUTES :: *
 * ************ */

var router = express.Router();

/* GET QrCode React Component. */
router.get('/',[
  check()
], (req, res) => {
  // Handle Validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  // Handle Cache
  res.set('Cache-Control', 'public, max-age=300, s-max-age=6000');

  // Server Side Render w/ Styles
  router.use(handleRender(req, res))
});

module.exports = {router};

/* *************** *
 * :: FUNCTIONS :: *
 * *************** */

function handleRender(req, res) {
  const sheets = new ServerStyleSheets();
  // Render the component to a string.
  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme.main}>
        <ContainerPayment/>
      </ThemeProvider>,
    ),
  );
  // Grab the CSS from the sheets.
  const css = sheets.toString();
  // Send the rendered page back to the client.
  res.send(renderFullPage('Qr Code', html, css));
}