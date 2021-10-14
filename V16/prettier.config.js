module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'never',
  arrowParens: 'always',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
};
