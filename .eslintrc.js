// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // mauro's preferences
    'brace-style': 'warn',
    'comma-dangle': 'off',
    'indent': 'warn',
    'key-spacing': 'warn',
    'no-cond-assign': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-multi-spaces': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unused-vars': 'warn',
    'operator-linebreak': 0,
    'quotes': 'warn',
    'semi': 'warn',
    'space-before-function-paren': 'off',
    'space-in-parens': 0,
    'spaced-comment': 'warn',
  }
}
