/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#1a1a1a',
          lighter: '#2d3133',
        },
        indigo: {
          DEFAULT: '#4f46e5',
        },
        neon: {
          cyan: '#22d3ee',
          violet: '#a855f7',
        },
        alabaster: '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
