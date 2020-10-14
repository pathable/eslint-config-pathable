module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended", "prettier"],
  plugins: ["cypress", "pathable", "react-hooks"],
  env: {
    browser: true,
    meteor: true,
    node: true,
    mocha: true,
    jest: true,
    "cypress/globals": true
  },
  rules: {
    "class-methods-use-this": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never"
      }
    ],
    "constructor-super": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    "global-require": "off",
    "no-bitwise": ["error", { allow: ["~"] }],
    "no-class-assign": "off",
    "no-confusing-arrow": "off",
    "no-console": "error",
    "no-continue": "off",
    "no-empty-pattern": "off",
    "no-mixed-operators": "off",
    "no-prototype-builtins": "off",
    "no-plusplus": "off",
    "no-underscore-dangle": "off",
    "no-useless-escape": "off",
    "no-restricted-globals": "off",
    "no-restricted-properties": "off",
    "no-restricted-syntax": "off",
    "prefer-destructuring": "off",
    "prefer-promise-reject-errors": "off",
    "import/export": "off",
    "import/extensions": "off",
    "import/first": "off",
    "import/no-duplicates": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-named-default": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-mutable-exports": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/alt-text": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/iframe-has-title": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react/default-props-match-prop-types": "off",
    "react/jsx-closing-tag-location": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-indent": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-pascal-case": "off",
    "react/no-array-index-key": "off",
    "react/no-danger": "off",
    "react/jsx-no-comment-textnodes": "off",
    "react/no-find-dom-node": "off",
    "react/no-render-return-value": "off",
    "react/no-string-refs": "off",
    "react/no-unused-state": "off",
    "react/prop-types": "off",
    "react/no-unused-prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-no-target-blank": "off",
    "react/prefer-stateless-function": [
      "error",
      { ignorePureComponents: true }
    ],
    "react/prefer-es6-class": "off",
    "pathable/no-import-root-pathable": "error",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  },
  parser: "babel-eslint",
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 10,
    ecmaFeatures: {
      jsx: true,
    }
  }
};
