module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugins: ['import', 'jest', 'unused-imports'],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'type',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/jest.setup.js'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style', 'prettier'],
    },
  ],
};
