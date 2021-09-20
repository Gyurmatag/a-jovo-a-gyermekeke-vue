module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        mainbackground: 'var(--color-main-background)',
        ekecolor: 'var(--color-eke)',
      },
    },
    fontFamily: {
      display: ['Montserrat'],
      body: ['Montserrat'],
      mono: ['Source Code Pro', 'SFMono-Regular'],
    },
  },
  variants: {
    extend: {
      fill: ['hover'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};
