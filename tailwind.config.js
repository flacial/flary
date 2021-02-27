module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm2': '760px',
        'md2': '1020px',
        // sm	640px	@media (min-width: 640px) { ... }
        // md	768px	@media (min-width: 768px) { ... }
        // lg	1024px	@media (min-width: 1024px) { ... }
        // xl	1280px	@media (min-width: 1280px) { ... }
        // 2xl	1536px	@media (min-width: 1536px) { ... }
      },
    },
    fontFamily: {
      'display': ['Oswald'],
      'body': ['Open Sans'],
      'serif': ['Playfair Display', 'serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
