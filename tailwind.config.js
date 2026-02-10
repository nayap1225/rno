/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,scss}", "./page/**/*.{html,js}"],
  theme: {
    extend: {
      // colors: {
      //   "glass-bg": "rgba(255, 255, 255, 0.1)",
      //   "glass-border": "rgba(255, 255, 255, 0.2)",
      //   "cosmic-indigo": "#1a1a2e",
      //   "cosmic-cyan": "#00d2ff",
      //   "cosmic-magenta": "#f000ff",
      // },
      // backdropBlur: {
      //   xs: "2px",
      // },
      // animation: {
      //   "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      //   float: "float 6s ease-in-out infinite",
      // },
      // keyframes: {
      //   fadeInUp: {
      //     "0%": { opacity: "0", transform: "translateY(20px)" },
      //     "100%": { opacity: "1", transform: "translateY(0)" },
      //   },
      //   float: {
      //     "0%, 100%": { transform: "translateY(0)" },
      //     "50%": { transform: "translateY(-20px)" },
      //   },
      // },
    },
  },
  plugins: [],
};
