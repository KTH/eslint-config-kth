const globals = require('globals')
const js = require('@eslint/js')
const babelParser = require('@babel/eslint-parser')
const prettierPlugin = require('eslint-plugin-prettier')
const prettierConfig = require('eslint-config-prettier')
const jestPlugin = require('eslint-plugin-jest')
const jestDomPlugin = require('eslint-plugin-jest-dom')
const testingLibraryPlugin = require('eslint-plugin-testing-library')
const importPlugin = require('eslint-plugin-import')
const reactPlugin = require('eslint-plugin-react')
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y')
const reactHooksPlugin = require('eslint-plugin-react-hooks')

const kthRules = {
  'arrow-body-style': ['error', 'as-needed'],
  'array-callback-return': 'error',
  'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
  'dot-notation': 'error',
  'func-names': ['error', 'as-needed'],
  'import/extensions': 'off',
  'import/newline-after-import': ['error', { count: 1 }],
  'import/order': ['error', { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] }],
  'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
  'no-console': ['error', { allow: [''] }],
  'no-multi-assign': ['error', { ignoreNonDeclaration: true }],
  'no-param-reassign': ['error', { props: false }],
  'no-plusplus': 'off',
  'no-restricted-syntax': [
    'error',
    {
      selector: 'LabeledStatement',
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],
  'no-restricted-globals': [
    'error',
    { name: 'isNaN', message: "Unexpected use of 'isNaN'. Use Number.isNaN instead" },
    { name: 'isFinite', message: "Unexpected use of 'isFinite'. Use Number.isFinite instead" },
  ],
  'no-shadow': [
    'error',
    {
      builtinGlobals: true,
      hoist: 'functions',
      allow: ['uri', 'stop', 'location', 'status', 'screen', 'name', 'event', 'origin', 'parent'],
      ignoreOnInitialization: false,
    },
  ],
  'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  'no-underscore-dangle': 'off',
  'no-var': 'error',
  'object-shorthand': ['error', 'always'],
  'operator-assignment': ['error', 'always'],
  'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],
  'prefer-destructuring': ['error', { object: true, array: true }],
  'prefer-template': 'off',
  'prettier/prettier': ['error'],
  'react/jsx-no-bind': [
    'error',
    {
      ignoreDOMComponents: false,
      ignoreRefs: false,
      allowArrowFunctions: true,
      allowFunctions: true,
      allowBind: false,
    },
  ],
  'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
  quotes: [
    0,
    'single',
    {
      avoidEscape: true,
    },
  ],
  'react/jsx-filename-extension': 'off',
  'react/prop-types': 'off',
  'react/no-multi-comp': 'off',
  'sort-imports': 'off',
  strict: 'off',
  'vars-on-top': 'error',
}

module.exports = [
  // Base ESLint recommended rules
  js.configs.recommended,

  // Prettier config (disables conflicting rules)
  prettierConfig,

  // Main configuration for JS/JSX files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
      react: reactPlugin,
      'jsx-a11y': jsxA11yPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...kthRules,
    },
  },

  // Jest/Testing configuration for test files
  {
    files: ['**/*.test.{js,jsx}', '**/*.spec.{js,jsx}', '**/test/**/*.{js,jsx}', '**/__tests__/**/*.{js,jsx}'],
    plugins: {
      jest: jestPlugin,
      'jest-dom': jestDomPlugin,
      'testing-library': testingLibraryPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    settings: {
      jest: {
        version: 'detect',
      },
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      ...jestDomPlugin.configs.recommended.rules,
      ...testingLibraryPlugin.configs.react.rules,
      'testing-library/no-debugging-utils': [
        'error',
        {
          utilsToCheckFor: {
            debug: false,
          },
        },
      ],
    },
  },
]
