module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "700": "#0D0D0D",
          "600": "#1A1A1A",
          "500": "#262626",
          "400": "#333333",
          "300": "#808080",
          "200": "#D9D9D9",
          "100": "#F2F2F2",
        },
        primary: {
          "base": "#5E60CE",
          "light": "#8284FA",
        },
        secondary: {
          "base": "#1E679F",
          "light": "#4EA8DE",
        },
        danger: "#E25858"
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      gridTemplateColumns: {
        'main': '256px 1fr',
      }
    },
  },
  plugins: [],
}