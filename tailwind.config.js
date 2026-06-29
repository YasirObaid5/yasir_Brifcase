/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/(site)/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9bb3cc',
          400: '#7a99b8',
          500: '#5c7fa3',
          600: '#4a6a8e',
          700: '#3d5a7a',
          800: '#344c66',
          900: '#2d4054',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #eff6ff 100%)',
      },
      fontFamily: {
        'caveat': ['Caveat', 'cursive'],
      }
    },
  },
  plugins: [],
}
