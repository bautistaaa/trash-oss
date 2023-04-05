module.exports = {
  root: true,
  extends: ['trash/base', 'trash/react'],
  settings: {
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json'],
      },
    },
  },
};
