# Changelog

All notable changes for major version updates will be documented here.

## 2.0.0

eslint-config-prettier upgraded to v8 as well as plugin:testing-library to v4.

See below for details

- https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md

- https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/migrating-to-v4-guide.md

## 3.0.0

### Requires Node 16

Version 3.0.0 requires Node >=16.x.

### Removed use of Airbnb's .eslintr

The configuration in `eslint-config-airbnb` was replaced by `eslint:recommended`.

### Major updates of dependencies

- `eslint`
- `eslint-plugin-jest`
- `eslint-plugin-jest-dom`
- `eslint-plugin-prettier`
- `eslint-plugin-testing-library`
  eslint-config-prettier

See below for details:

- https://eslint.org/docs/8.0.0/user-guide/migrating-to-8.0.0
- https://github.com/jest-community/eslint-plugin-jest/releases/tag/v25.0.0
- https://github.com/jest-community/eslint-plugin-jest/releases/tag/v26.0.0
- https://github.com/testing-library/eslint-plugin-jest-dom/releases/tag/v4.0.0
- https://github.com/prettier/eslint-plugin-prettier/releases/tag/v4.0.0
- https://github.com/testing-library/eslint-plugin-testing-library/releases/tag/v5.0.0

## 3.7.0

### Requires Node 20 or later

Version 3.7.0 requires Node ^20.19.0 || ^22.13.0 || >=24.

### Major updates of dependencies

- eslint-config-prettier
- eslint-plugin-jest
- eslint-plugin-react-hooks
- eslint-plugin-testing-library
- jest

### Minor updates of dependencies

- @babel/core
- prettier

### Removed @stylistic/eslint-plugin-js

Consequence of @stylistic/eslint-plugin-js removal:

- No error when comment starts immediately after `//` without space between, [see spaced-comment](https://eslint.style/rules/spaced-comment)
- No error when directives are stacked without blank lines between, see [padding-line-between-statements](https://eslint.style/rules/padding-line-between-statements)
