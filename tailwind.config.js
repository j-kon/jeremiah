/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#06070a',
        surface: '#0b1020',
        elevated: '#111827',
        line: '#223047',
        accent: '#f5b544',
        accentSoft: '#2c210b',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        panel: '0 24px 80px rgba(3, 7, 18, 0.46)',
        glow: '0 30px 120px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
      },
    },
  },
  plugins: [],
};
