module.exports = {
  root: true,
  extends: ['trash/base'],
  settings: {
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json'],
      },
    },
  },
};
