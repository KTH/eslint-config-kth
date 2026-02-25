# @kth/eslint-config-kth

## Start using this config

- Install all needed packages in your project:

  ```
  npm install --save-dev @kth/eslint-config-kth eslint prettier
  ```

  - You need [ESLint](https://eslint.org/) to enable linting.
  - This ESLint-configuration is also based on [Prettier](https://prettier.io/).
  - A configuration of [Babel](https://babeljs.io/) can be used when parsing your code.

- Place a file ".eslintrc" in the root of your project; it will only need to contain the following:

  ```
  {
    "extends": ["@kth/eslint-config-kth"]
  }
  ```

  All configuration needed will come from this config.

## Developer

Our goal with this module is to use the same ESLint config in all our node projects at KTH.

We are all responsible for keeping this module fresh to help us in our daily work.

Don´t be afraid to make changes but also take your time to discuss with colleagues about the changes you want to make.
