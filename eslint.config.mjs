import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      'coverage',
      'public',
      'src/components/ui/**'
    ]
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // TODO: ルールをファイルごとに整理する
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'eqeqeq': ['error', 'always'],
      'no-empty-function': 'warn',
      'consistent-return': 'warn',
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'linebreak-style': ['error', 'unix'],
      'no-redeclare': 'error',
      'no-duplicate-imports': 'error',
      'react/prop-types': 'warn',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    }
  }
]
