const express = require('express');
const rewrite = require('express-urlrewrite');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const WebpackConfig = require('./webpack.config');
const history = require('connect-history-api-fallback');

const app = express();

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: '/public/',
  stats: {
    colors: true,
    chunks: false
  }
}));

app.use(history({
  disableDotRule: true,
  verbose: true
}));

const fs = require('fs');
const path = require('path');

/*fs.readdirSync(__dirname).forEach(file => {
  if (fs.statSync(path.join(__dirname, file)).isDirectory()) {
    app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'))
  }
})*/

app.use(express.static(__dirname));

function handleRedirect(req, res) {
  console.log(req);
}

//app.get('*', handleRedirect);

const port = process.env.PORT || 8090;
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
});
