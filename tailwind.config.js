/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html',
    './src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        alt: '#B9FF66',
        back: '#F3F3F3',
        main:'#191A23'
      },
      maxWidth:{
        res:'1240px'
      }
    },
  },
  plugins: [],
}

