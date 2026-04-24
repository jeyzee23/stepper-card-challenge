module.exports = {
  preset: '@react-native/jest-preset',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
};
