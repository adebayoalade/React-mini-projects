/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_blue: "#2F1893",
        btn_green: "#25DAC5",
      },
      fontSize: {
        header: "72px",
        para: "22px",
        logo: "24px",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
