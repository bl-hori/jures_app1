module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Next.js projects don't require this
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Add any project-specific rules here
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".next/", "coverage/", ".turbo/", "build/"],
};
