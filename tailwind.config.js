module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#6C63FF",

          "secondary": "#313049",

          "accent": "#3A4256",

          "black": "#000000",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#F79100",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}