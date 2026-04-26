const { babelAlias } = require('./config/moduleResolution');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: babelAlias,
      },
    ],
  ],
};
