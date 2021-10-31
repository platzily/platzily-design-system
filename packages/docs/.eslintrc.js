

module.exports = {
  rules: {
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['*.mdx'],
      parser: 'eslint-mdx',
      extends: [
        'plugin:react/recommended',
        'plugin:mdx/recommended',
      ],
      settings: {
        'mdx/code-blocks': true,
        // optional, if you want to disable language mapper, set it to `false`
        // if you want to override the default language mapper inside, you can provide your own
        'mdx/language-mapper': {},
      },
      rules: {
        indent: ['error', 2],
        semi: ['error', 'never'],
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'always'],
        'no-undef': 'error',
        'no-unused-vars': ['error', { args: 'all' }],
        '@typescript-eslint/naming-convention': 'off'
        '@typescript-eslint/no-unused-vars': 'off'
      },
    }
  ]
};
