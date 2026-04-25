module.exports = {
  preset: '@react-native/jest-preset',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.styles.ts',
    '!src/**/*.styles.*.ts',
    '!src/**/index.ts',
    '!src/design-system/platformTokens*.ts',
    '!src/i18n/locales/**',
    '!src/i18n/types.ts',
    '!src/**/*.mock.json',
    '!src/**/*.types.ts',
    '!src/**/__fixtures__/**',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/jest.setup.js'],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
};
