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
    'no-cond-assign': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unused-vars': 'warn',
    'semi': 'warn',
    'space-before-function-paren': 'off',
  }
}
