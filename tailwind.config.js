/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens :{
      'sm': '375px',
      'md':'1440px'
      // Mobile: 375px
      // - Desktop: 1440px
    },
    fontSize: {
      'sm': '20px',
      'xl':'48px',
      'md':'32px',
    },
    extend: {
      colors: {
        'grayishBlue' : "hsl(237, 18%, 59%)",
        'softRed': "hsl(345, 95%, 68%)",
        'white': "hsl(0, 0%, 100%)",
        'darkDesaturatedBlue': "hsl(236, 21%, 26%)",
        'veryDarkBlue': "hsl(235, 16%, 14%)",
        'veryBlackBlue': "hsl(234, 17%, 12%)"
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bg-stars.svg')",
        'pattern-hills':  "url('/images/pattern-hills.svg')",
      },
      
    },
  },
  plugins: [],
}


// - Grayish blue: hsl(237, 18%, 59%)
// - Soft red: hsl(345, 95%, 68%)

// ### Neutral

// - White: hsl(0, 0%, 100%)
// - Dark desaturated blue: hsl(236, 21%, 26%)
// - Very dark blue: hsl(235, 16%, 14%)
// - Very dark (mostly black) blue: hsl(234, 17%, 12%)