/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  prefix: '',
  corePlugins: {
    preflight: true // disable preflight (reset)
  },
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '728px',
        xl: '728px',
        '2xl': '728px'
      }
    },
    extend: {}
  },
  plugins: [
    'postcss-import',
    'postcss-nesting',
    'tailwindcss',
    'autoprefixer',
    'tailwindcss-animate'
  ]
}
