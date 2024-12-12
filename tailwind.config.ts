import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#023a39',
          light: '#045e54',
          dark: '#011c1b'
        },
        secondary: {
          DEFAULT: '#045e54',
          light: '#068f80',
          dark: '#023a39'
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
        accent: '#FF6B6B',
        success: '#28A745',
        warning: '#FFC107',
        error: '#DC3545'
      }
    }
  },
  plugins: []
} satisfies Config
