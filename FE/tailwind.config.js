/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "bg-img-auth": 'url("/images/bgAuth.jpg")',
    },
  },
  plugins: [],
};
