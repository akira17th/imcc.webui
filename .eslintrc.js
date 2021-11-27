module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
    // 'react/jsx-one-expression-per-line': 'off',
    'import/no-extraneous-dependencies': 'off',
    'comma-dangle': [ 'error', 'never' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    semi: [ 'error', 'never' ],
    'arrow-parens': [ 'error', 'as-needed' ]
  }
}
