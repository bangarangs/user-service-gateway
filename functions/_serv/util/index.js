"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderFullPage = renderFullPage;

function renderFullPage(title, html, css) {
  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>".concat(title, "</title>\n        <style id=\"jss-server-side\">").concat(css, "</style>\n      </head>\n      <body>\n        <div id=\"root\">").concat(html, "</div>\n      </body>\n    </html>\n  ");
}