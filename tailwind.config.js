/** @type {import('tailwindcss').Config} */
// CDN 런타임 대신 CLI 빌드용 설정 (ROADMAP Phase 6: CDN → 빌드 전환)
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#e85d3a',
          dim: 'rgba(232,93,58,0.12)',
          glow: 'rgba(232,93,58,0.25)',
        },
      },
    },
  },
  plugins: [],
};
