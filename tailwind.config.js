/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mob': {
        'max': '429px',
      },
      'pad': '430px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '1.5xl': '1536px',
      '2xl': '1836px',
      'ultra': '2160px',
    },
    extend: {
      gridTemplateColumns: {
        'real-nav': '1fr 1fr',
        'nav': '1fr 2fr 1fr',
        'md-nav': '1fr 5fr',
        'xl-nav': '1fr 4fr',
        'footer': '1fr 1.5fr',
        'story': '1.2fr 1fr',
        'table': '1fr 1.2fr',
        'form': '2fr 1fr',
      },
      gridTemplateRows: {
        'images': '1.7fr 1fr 1fr',
        'images-lg': '1.4fr .6fr 1fr',
        'images-md': '1fr .6fr 1fr',
        'form-md': '1.5fr 3fr 1fr',
      }
    },
  },
  plugins: [],
}


