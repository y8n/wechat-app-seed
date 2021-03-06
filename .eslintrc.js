module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  'env': {
    'browser': true,
    'node': true
  },
  extends: 'eslint:recommended',
  'globals': {
    'Promise': true,
    'NODE_ENV': true,
    'wx': false,
    'getApp': false,
    'getCurrentPages': false,
    'App': false,
    'Page': true
  },
  'rules': {
    'no-console': 'off',
    'eol-last': 'warn',
    'no-trailing-spaces': 'warn',
    'indent': ['error', 2, {'SwitchCase': 1}],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': 'error',
    'key-spacing': 'error',
    'no-spaced-func': 'error',
    'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never'}],
    'semi-spacing': ['error', {'before': false, 'after': true}],
    'comma-spacing': ['error', {'before': false, 'after': true}],
    'space-in-parens': ['error', 'never'],
    'max-len': ['error', 120],
    'operator-linebreak': ['error', 'before'],
    'comma-style': 'error',
    'brace-style': ['warn', '1tbs', {'allowSingleLine': true}],
    'semi': ['error', 'always'],
    'curly': ['error', 'all'],
    'wrap-iife': ['error', 'inside'],
    'camelcase': ['error', {'properties': 'never'}],
    'new-cap': ['warn', {'capIsNewExceptions': ['Event', 'App', 'Page']}],
    'id-length': ['error', {'exceptions': ['i', 'j', 'k', 'd', 'x', 'y']}],
    'spaced-comment': 'warn',
    'lines-around-comment': ['warn', {'beforeLineComment': true}],
    'no-use-before-define': ['error', 'nofunc'],
    'eqeqeq': ['error', 'allow-null'],
    'no-else-return': 'warn',
    'no-loop-func': 'warn',
    'radix': ['error'],
    'quotes': ['error', 'single'],
    'no-new-object': 'error',
    'quote-props': ['warn', 'consistent-as-needed', {'keywords': true}],
    'no-extend-native': 'error',
    'dot-notation': ['warn', {'allowKeywords': false, 'allowPattern': '^[a-z]+([-_][a-z]+)+$'}],
    'guard-for-in': 'warn',
    'no-array-constructor': 'error',
    'max-params': ['warn', 6],
    'no-new-func': 'warn',
    'no-eval': 'error',
    'no-implied-eval': 'warn',
    'no-with': 'warn',
    'arrow-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-var': 'warn'
  }
};
