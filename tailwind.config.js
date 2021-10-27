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
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
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
