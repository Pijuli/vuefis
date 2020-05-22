module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "comma-dangle": [2, {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore",
    }],
    'arrow-parens': 0,
    "indent": ['error', 2, {
      'ignoredNodes': ['TemplateLiteral']
    }],
    "template-curly-spacing": "off",
    'generator-star-spacing': 0,
    'no-return-assign': 0,
    'no-console': 'off',
    'no-useless-escape': 'off',
    'unicode-bom': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/no-v-html': 0,
    'vue/html-end-tags': 'error',
    'vue/html-indent': ['error', 2],
    'vue/script-indent': ['error', 2, { 'baseIndent': 0 }],
    'vue/html-self-closing': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/html-quotes': ['error', 'double'],
    'vue/order-in-components': 'error',
    'vue/padding-line-between-blocks': 1
  },
};