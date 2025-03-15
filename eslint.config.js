import { defineConfig } from 'eslint'
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import pluginReact from 'eslint-plugin-react'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    parser: '@typescript-eslint/parser',
    plugins: [tseslint, pluginReact, pluginJs],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/jsx-uses-vars': 'warn',
    },
  },
])
