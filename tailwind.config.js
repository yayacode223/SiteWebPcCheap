const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",


    
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'dashboard': 'repeat(auto-fit, minmax(200px, auto))',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
        'carousel': 'repeat(auto-fit, minmax(300px, auto))',
      }
    },
  plugins: [
    flowbite.plugin(),
    function ({addUtilities}) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }
      };

      addUtilities(newUtilities);
    }
  ],
}
