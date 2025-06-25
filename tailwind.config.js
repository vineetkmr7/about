/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F9FAFB',
          dark: '#0F172A',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1E293B',
        },
        primary: {
          DEFAULT: '#4F46E5',
          dark: '#6366F1',
        },
        secondary: {
          DEFAULT: '#06B6D4',
          dark: '#22D3EE',
        },
        text: {
          light: '#111827',
          dark: '#F8FAFC',
          secondaryLight: '#6B7280',
          secondaryDark: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
