/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        fabric:
          'url("https://transparenttextures.com/patterns/45-degree-fabric-dark.png")',
      },
      colors: {
        primary: {
          100: "#e9e9e9",
          200: "#191919",
          300: "#757575",
        },
        secondary: {
          100: "#dacfcb",
          200: "#67b967",
        },
      },
      fontFamily: {
        body: ["Oxanium"],
      },
      gridTemplateColumns: {
        "2fr-1fr": "2fr 1fr",
      },
    },
  },
  plugins: [],
};
