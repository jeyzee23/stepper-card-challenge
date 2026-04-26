const path = require('path');

const sourceRoot = path.resolve(__dirname, '..', 'src');

module.exports = {
  babelAlias: {
    '@': './src',
  },
  jestModuleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  sourceRoot,
};
