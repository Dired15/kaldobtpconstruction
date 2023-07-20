/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'logoBlue':"hsl(206,97%,29%)",
        'logoOrange':"hsl(32,93%,54%)",
        'lightGray':"hsl(0,0%,86%)",
        'darkGray':"hsla(0,0%,0%,45%)",
        'footerBlue':"hsl(198,82%,17%)",
      },
    },
  },
  plugins: [],
}
