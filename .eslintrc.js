const path = require('path');

const forbidTopLevelMessage = [
  'Prefer one level nested imports to avoid bundling everything in dev mode',
  'See https://github.com/mui-org/material-ui/pull/24147 for the kind of win it can unlock.',
].join('\n');

module.exports = {
  root: true, // So parent files don't get applied
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 7,
  },
  plugins: [
    'eslint-plugin-material-ui',
    'eslint-plugin-react-hooks',
    '@typescript-eslint/eslint-plugin',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './webpackBaseConfig.js'),
      },
    },
  },
  /**
   * Sorted alphanumerically within each group. built-in and each plugin form
   * their own groups.
   */
  rules: {
    'consistent-this': ['error', 'self'],
    curly: ['error', 'all'],
    // Just as bad as "max components per file"
    'max-classes-per-file': 'off',
    // Too interruptive
    'no-alert': 'error',
    // Stylistic opinion
    'arrow-body-style': 'off',
    // Allow warn and error for dev environments
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-param-reassign': 'off', // It's fine.
    // Airbnb use warn https://github.com/airbnb/javascript/blob/63098cbb6c05376dbefc9a91351f5727540c1ce1/packages/eslint-config-airbnb-base/rules/style.js#L97
    // but eslint recommands error
    'func-names': 'error',
    'no-constant-condition': 'error',
    // Use the proptype inheritance chain
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 'error',
    'nonblock-statement-body-position': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    // Destructuring harm grep potential.
    'prefer-destructuring': 'off',
    // disabled type-aware linting due to performance considerations
    '@typescript-eslint/dot-notation': 'off',
    'dot-notation': 'error',
    // disabled type-aware linting due to performance considerations
    '@typescript-eslint/no-implied-eval': 'off',
    'no-implied-eval': 'error',
    // disabled type-aware linting due to performance considerations
    '@typescript-eslint/no-throw-literal': 'off',
    'no-throw-literal': 'error',
    // disabled type-aware linting due to performance considerations
    '@typescript-eslint/return-await': 'off',
    'no-return-await': 'error',
    // Not sure why it doesn't work
    'import/named': 'off',
    // Missing yarn workspace support
    'import/no-extraneous-dependencies': 'off',
    // The code is already coupled to webpack. Prefer explicit coupling.
    'import/no-webpack-loader-syntax': 'off',
    // doesn't work?
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        // airbnb uses 'both' which requires nesting i.e. <label><input /></label>
        // 'either' allows `htmlFor`
        assert: 'either',
      },
    ],
    // We are a library, we need to support it too
    'jsx-a11y/no-autofocus': 'off',
    'react-hooks/exhaustive-deps': ['error', { additionalHooks: 'useEnhancedEffect' }],
    'react-hooks/rules-of-hooks': 'error',
    'react/default-props-match-prop-types': [
      'error',
      {
        // Otherwise the rule thinks inner props = outer props
        // But in TypeScript we want to know that a certain prop is defined during render
        // while it can be ommitted from the callsite.
        // Then defaultProps (or default values) will make sure that the prop is defined during render
        allowRequiredDefaults: true,
      },
    ],
    // Can add verbosity to small functions making them harder to grok.
    // Though we have to manually enforce it for function components with default values.
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off', // Too strict, no time for that
    'react/jsx-curly-brace-presence': 'off', // broken
    // airbnb is using .jsx
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    // Prefer <React.Fragment> over <> because it allow the dev to write a ref on it.
    'react/jsx-fragments': ['error', 'element'],
    // Enforces premature optimization
    'react/jsx-no-bind': 'off',
    // We are a UI library.
    'react/jsx-props-no-spreading': 'off',
    // This rule is great for raising people awareness of what a key is and how it works.
    'react/no-array-index-key': 'off',
    'react/no-danger': 'error',
    'react/no-direct-mutation-state': 'error',
    // Not always relevant
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'error',
    // This depends entirely on what you're doing. There's no universal pattern
    'react/state-in-constructor': 'off',
    // stylistic opinion. For conditional assignment we want it outside, otherwise as static
    'react/static-property-placement': 'off',
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'import/export': 'off', // Not sure why it doesn't work
      },
    },
    {
      files: ['*.tsx'],
      excludedFiles: '*.spec.tsx',
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: ['packages/typescript-to-proptypes/src/**/*.ts'],
      rules: {
        // Working with flags is common in TypeScript compiler
        'no-bitwise': 'off',
      },
    },
  ],
};
