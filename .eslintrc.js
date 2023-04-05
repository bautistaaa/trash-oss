module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-trash`
  extends: ["trash/base"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
