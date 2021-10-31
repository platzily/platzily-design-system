const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/typescript',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 7,
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/return-await': 'off',
    'import/prefer-default-export': 'off',
    'max-len': ['error', { code: 200, ignoreTemplateLiterals: true, ignoreStrings: true }],
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 'off',
    'semi': 'error',
    'object-curly-spacing': 'error',
    'indent': ['error', 2],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true, 'avoidEscape': true }],
    'space-before-blocks': 'error',
    'no-param-reassign': 'off',
    'consistent-this': ['error', 'self'],
    curly: ['error', 'all'],
    'max-classes-per-file': 'off',
    'no-alert': 'error',
    'arrow-body-style': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'func-names': 'error',
    'no-constant-condition': 'error',
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 'error',
    'nonblock-statement-body-position': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-destructuring': 'off',
    'dot-notation': 'error',
    'no-implied-eval': 'error',
    'no-throw-literal': 'error',
    'no-return-await': 'error',
    'import/named': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'jsx-a11y/no-autofocus': 'off',
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: true }],
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-no-bind': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/no-danger': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'error',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './webpack.config.js'),
      },
    },
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'import/export': 'off',
      },
    },
  ]
};
