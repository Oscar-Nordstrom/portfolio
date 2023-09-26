/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'cust-blue-1':'#E8F1F2',
        'cust-blue-2':'#1B98E0',
        'cust-blue-3':'#247BA0',
        'cust-blue-4':'#006494',
        'cust-blue-5':'#13293D',
      },
    },
    fontFamily:{
      sans: ["Arial"]
    }

  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake"
    ],
  },
}

