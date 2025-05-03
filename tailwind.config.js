module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#002D4B',
        },
        success: {
          100: '#D6FBD0',
          600: '#29BB11',
        },
        danger: {
          600: '#DC2626',
        },
        warning: {
          600: '#FCFC1B',
        },
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900'
      },
    },
  },
  plugins: [],
};