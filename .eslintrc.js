module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["html", "prettier", "react-hooks"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "no-console": 0,
    "comma-dangle": 0,
    "func-names": 0,
    "max-len": 0,
    "space-before-function-paren": 0,
    "consistent-return": 0,
    "arrow-body-style": [2, "as-needed"],
    "no-return-assign": ["error", "except-parens"],
    "prefer-const": [
      "error",
      {
        destructuring: "all",
      },
    ],
    "no-unused-vars": [
      1,
      {
        ignoreRestSiblings: true,
      },
    ],
    "no-param-reassign": [
      2,
      {
        props: false,
      },
    ],
    quotes: [
      2,
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 80,
      },
    ],
  },
};
