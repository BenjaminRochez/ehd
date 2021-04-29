module.exports = {
  purge: [
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Poppins'],
    },
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/img/hero.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
