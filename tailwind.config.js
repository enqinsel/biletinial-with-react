/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1270px",
        // 'xl': '1140px',
        // '2xl': '1140px',
      },
      fontSize: {
        '64xl': ['64px', '68px']
      },
    },
    screens: {
      // '2xl': {'max': '1535px'},
      // // => @media (max-width: 1535px) { ... }

      // 'xl': {'max': '1279px'},
      // // => @media (max-width: 1279px) { ... }

      'lg': {'min': '993px'},
      // => @media (min-width: 993px) { ... }

      'md': {'min': '577px', 'max': '992px'},
      // => @media (min-width: 577px and max-width: 992px) { ... }

      'sm': {'max': '576px'},
      // => @media (max-width: 576px) { ... }
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "athletics": "#919EAB",
        "categories-grey": "#F1F1F1",
        "early-bg": "#D3FDDC",
        "early-text" : '#10562C',
        "button-green": "#3DAB5D",
        "taxes-green": "#04573F",
        "cardOne-bg": "#D9D9D9",
        "follow-blue": "#0A84FF",
        "from-grey": "#888888",
        "menu-link": "#199BD3",
        "menu-button": '#F8E71C',
        "card-border" : '#EBECEE',
        "searchbox" : '#F9F9F9',
        "indoor" : '#212B36',
        "select" : '#DFDFDF',
        "current" : '#777777',
        "border-li": 'rgba(223, 223, 223, 0.3)',
        "border-left": 'rgba(220, 220, 220)'
      },
      spacing: {
        128: "32rem",
        77:'77px',
        55 : '55%',
        45 : '45%'
      },
      padding: {
        150: "150px",
      },
      width: {
        '558' : '558px',
        '53' : '53px',
        '1080': '1080px',
        '843': '843px',
        '306' : '306px',
        '1270': '1270px',
        '635': '635px',
        '1243': '1243px',
        '400' : '400px',
        '255' : '255px',
        
      },
      height: {
        '450': '450px',
        '426': '426px',
        '179': '179px',
        '319' : '319px'
      },
      lineHeight: {
        '68': '68px'
      },
      boxShadow: {
        '40xl': '0px 0px 40px rgba(0, 0, 0, 0.07)',
      }
    },
  },
  plugins: [],
};
