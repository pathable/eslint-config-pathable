module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier'],
  env: {
    meteor: true,
    node: true,
    mocha: true
  },
  rules: {
    'class-methods-use-this': 'off',
    'constructor-super': 'off',
    'max-len': [
      'error',
      {
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'global-require': 'off',
    'no-class-assign': 'off',
    'no-confusing-arrow': 'off',
    'no-continue': 'off',
    'no-empty-pattern': 'off',
    'no-mixed-operators': 'off',
    'no-prototype-builtins': 'off',
    'no-plusplus': 'off',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-escape': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'prefer-destructuring': 'off',
    'prefer-promise-reject-errors': 'off',
    'import/export': 'off',
    'import/extensions': 'off',
    'import/first': 'off',
    'import/no-duplicates': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-default': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-pascal-case': 'off',
    'react/no-find-dom-node': 'off',
    'react/no-render-return-value': 'off',
    'react/no-unused-state': 'off',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/prefer-es6-class': 'never'
  },
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  }
};
