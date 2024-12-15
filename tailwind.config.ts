import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#247157',
          light: '#2e8e6b',
          dark: '#1a5a43'
        },
        secondary: {
          DEFAULT: '#2e8e6b',
          light: '#3da780',
          dark: '#20684e'
        },
        neutral: {
          DEFAULT: '#f3f4f0',
          light: '#f9f9f9',
          dark: '#e5e5e5'
        },
        textColors: {
          primary: '#333333',
          light: '#70706f',
          dark: '#1a1a1a'
        },
        accent: '#E67E22',
        success: '#3CB371',
        warning: '#FFD700',
        error: '#FF6347'
      }
    }
  },
  plugins: []
} satisfies Config
