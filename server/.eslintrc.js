module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
        ],
        paths: ['src'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    jest: {
      globalAliases: {
        describe: ['context'],
        fdescribe: ['fcontext'],
        xdescribe: ['xcontext'],
      },
    },
  },
  globals: {
    context: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jest',
  ],
  ignorePatterns: ['dist', 'scripts'],
  rules: {
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [
          'builtin',
          'external',
        ],
      },
    ],
    'import/no-duplicates': 'error',
    'import/no-useless-constructor': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-constructor': 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'no-empty-function': 'off',
    'no-undef': 'off',
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
  },
};
