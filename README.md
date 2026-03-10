# @kth/eslint-config-kth

Shared ESLint configuration for KTH Node.js projects.

## Requirements

- Node.js `^20.19.0 || ^22.13.0 || >=24`
- ESLint `^9.0.0`

## Installation

```bash
npm install --save-dev @kth/eslint-config-kth eslint prettier
```

## Usage

Create an `eslint.config.js` file in your project root:

```js
const kthConfig = require('@kth/eslint-config-kth')

module.exports = [
  ...kthConfig,
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
]
```

Add scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint public/ server/ --quiet",
    "lint-v": "eslint public/ server/"
  }
}
```

## What's included

This config exports a flat config array with three configuration objects:

1. Base config with ESLint recommended rules + Prettier
2. Main config for `**/*.{js,jsx}` files with React, JSX-A11y, React Hooks, Import, and Prettier plugins with KTH-specific rules
3. Test config for `**/*.test.{js,jsx}`, `**/*.spec.{js,jsx}`, `**/test/**/*.{js,jsx}`, `**/__tests__/**/*.{js,jsx}`, and `**/__mocks__/**/*.{js,jsx}` with Jest, Jest-DOM, and Testing Library plugins

## Migrating from v3

See [MIGRATING.md](./MIGRATING.md) for upgrade instructions from v3 to v4.

## Contributing

Our goal is to maintain a consistent ESLint configuration across all KTH Node.js projects.

We are all responsible for keeping this module up to date. Don't be afraid to make changes, but take time to discuss with colleagues about significant modifications.
