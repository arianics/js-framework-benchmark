const babelrc = require('@aofl/cli-lib/modules/webpack-config/.babelrc.js');

module.exports = {
  "plugins": ["node_modules/jsdoc-babel"],
  "babel": {
    ...babelrc
  },
  "source": {
    "include": ["./src", "README.md"],
    "includePattern": "\\.js$"
  },
  "opts": {
    "template": "./node_modules/ink-docstrap/template",
    "encoding": "utf8",
    "destination": "api-docs/",
    "recurse": true,
    "verbose": true
  },
  "tags": {
    "allowUnknownTags": true
  },
  "templates": {
    "systemName": "AofL Starter Docs",
    "theme": "paper",
    "linenums": true,
    "outputSourceFiles": true,
    "collapseSymbols": false,
    "navType": "vertical",
    "inverseNav": true,
    "cleverLinks": false,
    "monospaceLinks": false
  }
};
