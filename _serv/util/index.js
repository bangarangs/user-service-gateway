export function renderFullPage(title, html, css) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style id="jss-server-side">${css}</style>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}