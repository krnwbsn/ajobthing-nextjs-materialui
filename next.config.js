const path = require('path');

module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          configFile: path.join(__dirname, './.eslintrc.js'),
        },
      });
    }
    return config;
  },
};
