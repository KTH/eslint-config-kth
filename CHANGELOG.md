# Changelog

## 4.0.0

See [MIGRATING.md](./MIGRATING.md) for details on how to upgrade from 3.x to 4.0.0.

### Requires Node 20 or later

Version 4.0.0 requires Node `^20.19.0 || ^22.13.0 || >=24`.

### Breaking Changes

- ESLint 9 required
- Config format changed from legacy eslintrc object to flat config array

### Changes

Added new dependencies:

- `@babel/preset-react` `^7.28.5`
- `globals` `^16.0.0`

Added peerDependencies:

- `eslint` `^9.0.0`

Updated dev dependencies:

- `eslint` `9.20.0`

Updated configuration:

- Converted from legacy eslintrc object to flat config array format
- Now exports an array with 3 config objects:
  - `js.configs.recommended` + `prettierConfig`
  - Main config for `\*_/_.{js,jsx}` files (React, JSX-A11y, React Hooks, Import, Prettier)
  - Test config for `\*_/_.test.{js,jsx}` etc. (Jest, Jest-DOM, Testing Library)

## 3.7.0

### Requires Node 20 or later

Version 3.7.0 requires Node `^20.19.0 || ^22.13.0 || >=24`.

### Major updates of dependencies

- `eslint-config-prettier`
- `eslint-plugin-jest`
- `eslint-plugin-react-hooks`
- `eslint-plugin-testing-library`
- `jest`

### Minor updates of dependencies

- `@babel/core`
- `prettier`

### Removed @stylistic/eslint-plugin-js

Consequence of `@stylistic/eslint-plugin-js` removal:

- No error when comment starts immediately after `//` without space between, [see spaced-comment](https://eslint.style/rules/spaced-comment)
- No error when directives are stacked without blank lines between, see [padding-line-between-statements](https://eslint.style/rules/padding-line-between-statements)

## 3.0.0

### Requires Node 16

Version 3.0.0 requires Node `>=16.x`.

### Removed use of Airbnb's .eslintr

The configuration in `eslint-config-airbnb` was replaced by `eslint:recommended`.

### Major updates of dependencies

- `eslint`
- `eslint-plugin-jest`
- `eslint-plugin-jest-dom`
- `eslint-plugin-prettier`
- `eslint-plugin-testing-library`
- `eslint-config-prettier`

See below for details:

- https://eslint.org/docs/8.0.0/user-guide/migrating-to-8.0.0
- https://github.com/jest-community/eslint-plugin-jest/releases/tag/v25.0.0
- https://github.com/jest-community/eslint-plugin-jest/releases/tag/v26.0.0
- https://github.com/testing-library/eslint-plugin-jest-dom/releases/tag/v4.0.0
- https://github.com/prettier/eslint-plugin-prettier/releases/tag/v4.0.0
- https://github.com/testing-library/eslint-plugin-testing-library/releases/tag/v5.0.0

## 2.0.0

`eslint-config-prettier` upgraded to `v8` as well as `plugin:testing-library` to `v4`.

See below for details:

- https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md

- https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/migrating-to-v4-guide.md
