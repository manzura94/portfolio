import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'next/typescript', 'prettier'],
    plugins: ['prettier'],
    settings: {
      next: {
        rootDir: './',
      },
    },
  }),
  {
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'next/no-html-link-for-pages': 'off',
    },
  },
]

export default eslintConfig
