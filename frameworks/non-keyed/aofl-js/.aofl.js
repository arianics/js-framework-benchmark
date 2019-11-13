const path = require('path');

module.exports = {
  name: 'Aofl 3.x Benchmark (non-keyed)',
  build: {
    publicPath: '/frameworks/non-keyed/aofl-js/__build/',
    css: {
      include: [path.join(__dirname, '..', '..', '..', 'css')]
    },
    fonts: {
      test: /\.(woff2?|ttf|eot|svg)[?|#]?.*/,
      include: [path.join(__dirname, '..', '..', '..', 'css')]
    },
    eslint: {
      options: {
        config: path.join(__dirname, '.eslintrc.js')
      }
    }
  }
};
