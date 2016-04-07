var historyApiFallback = require('connect-history-api-fallback');

module.exports = {
  "port": 8080,
  "files": [
    "./build/client/**/*",
    "./node_modules/**/*.{html,htm,css,js}"
  ],
  "server": {
    "baseDir": "./build/client/",
    "routes": {
        "/node_modules": "node_modules",
        "/assets": "public",
        "/styles": "./build/styles"
    }
  },
  "watchOptions": {
    "usePolling": true,
    "interval": 2000,
    "ignored": [
      "node_modules/",
      ".git/"
    ]
  },
  "codeSync": true,
  "injectChanges": true,
   middleware: [ historyApiFallback() ]
};
