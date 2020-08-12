module.exports = {
    theme: {
      extend: {
        colors: {
          'bg-landing': '#2C2A37',
          'theme': 'var(--color-theme)',
          'night1': '#61DAFB',
          'day1': '#FFC700',
        },
        fontFamily: {
          'Poppins': 'Poppins',
        },
      },
    },
    variants: {},
    plugins: [],
    purge: {
      // set to true for production
      // enabled: true,
      // include every file with tailwind classes
      content: [
        './src/**/*.tsx',
        './src/index.html'
      ],
    },
  }
  