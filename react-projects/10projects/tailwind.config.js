module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Match all relevant files
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ['Arial', 'sans-serif'], 
        bookantiqua: ['"Book Antiqua"', 'serif'],
        courier: ['"Courier New"', 'monospace'], 
      },
    },
  },
  plugins: [],
};
