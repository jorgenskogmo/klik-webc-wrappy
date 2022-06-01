// const path = require('path');

module.exports = {
  // extends: [
  //   '@lego/eslint-config-typescript',
  //   '@lego/eslint-config-react',
  //   '@lego/eslint-config-jest',
  //   '@lego/eslint-config-prettier',
  // ],
  
  
  parserOptions: {
    ecmaVersion: 2018,
    project: ['./tsconfig.eslint.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  // root: true,
  
  // settings: {
  //   node: {
  //     allowModules: ['@lego/klik-ui'],
  //   },
  //   'import/resolver': {
  //     // The order here is important
  //     lerna: {
  //       packages: [path.resolve(__dirname, 'packages'), path.resolve(__dirname, 'tooling')],
  //     },
  //     typescript: true,
  //   },
  // },
};
