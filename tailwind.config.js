/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { midnight: '#080B14', navy: '#101827', electric: '#477BFF', violet: '#9B7BFF', cyan: '#62DDF5', ink: '#F4F6FC', muted: '#A0ABC0' },
    fontFamily: { display: ['Space Grotesk', 'sans-serif'], body: ['DM Sans', 'sans-serif'] }
  }},
  plugins: []
}