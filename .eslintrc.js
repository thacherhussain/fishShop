module.exports = {
  extends: [
    'ryansobol/node',
    'ryansobol/es6'
    ],
  rules: {
    "sort-imports": "off",
    "no-console": "off",
    "no-undef": "off",
    "strict": "off",
    "no-return-assign": "off"
  },
  parserOptions: {
    sourceType: 'module'
  }
};
