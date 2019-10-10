'use strict';
// Routers
import {router as routerQrcode}  from './routes/router.qr';
import {router as routerPayment} from './routes/router.payment';
module.exports = (app) => {
  app.use('/qr', routerQrcode);
  app.use('/payment', routerPayment);
};

/* ************ *
 * :: THEMES :: *
 * ************ */

import themeMain from './themes/theme.main';

export const theme = {
  main: themeMain
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