/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            lineHeight: '1.75',
            fontSize: '1.125rem',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#3b82f6',
          'secondary': '#8b5cf6',
          'accent': '#06b6d4',
          'neutral': '#374151',
          'base-100': '#ffffff',
          'base-200': '#f3f4f6',
          'base-300': '#e5e7eb',
          'info': '#0ea5e9',
          'success': '#22c55e',
          'warning': '#f59e0b',
          'error': '#ef4444',
        },
        dark: {
          'primary': '#60a5fa',
          'secondary': '#a78bfa',
          'accent': '#22d3ee',
          'neutral': '#1f2937',
          'base-100': '#111827',
          'base-200': '#1f2937',
          'base-300': '#374151',
          'info': '#38bdf8',
          'success': '#4ade80',
          'warning': '#fbbf24',
          'error': '#f87171',
        },
      },
    ],
  },
};
