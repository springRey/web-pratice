module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
    "eslint:recommended",
    "plugin:prettier/recommended" // prettier和eslint扩展
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    // allow paren-less arrow functions
    "arrow-parens": 0
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      }
    }
  }
};
