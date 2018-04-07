module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: 'standard',
  'rules': {
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new': 'off',
    'object-curly-spacing': ['error', 'always']
  },
  globals: {
    describe: true,
    it: true,
    RES_ERROR: true,
    before: true,
    after: true
  }
}
