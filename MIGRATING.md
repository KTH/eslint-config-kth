# Migrating

## Upgrade from 3.x to 4.0.0

### Node version

- Use Node 20 or later

### Update dependencies

- Update `eslint` to version 9

### Update configuration

Convert from legacy eslintrc object to flat config array format:

- Note `ignores` in legacy `.eslintrc`file
- Create new `eslint.config.js` file with the new flat config array format (see [example](#flat-config-array-format) below) and include the `ignores` in the new config
- Remove `.eslintrc` file

### Update scripts

Update scripts in `package.json` (see [example](#packagejson-scripts) below).

## Examples

### Flat config array format

```js
// eslint.config.js
const kthConfig = require('@kth/eslint-config-kth')

module.exports = [
  ...kthConfig,
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
]
```

### Scripts in package.json

```json
{
  "scripts": {
    "lint": "eslint public/ server/ --quiet",
    "lint-v": "eslint public/ server/"
  }
}
```
