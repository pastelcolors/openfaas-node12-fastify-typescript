module.exports = {
  "root": true,
  "extends": [
    "lxsmnsyc/typescript"
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname
  },
  "rules": {
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-floating-promises": "off"
  }
};
