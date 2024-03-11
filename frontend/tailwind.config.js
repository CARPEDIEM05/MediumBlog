/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'slate-50':'#f8fafc',
      'slate-200': '#e2e8f0',
      'slate-300': "#cbd5e1",
      'slate-400':'#94a3b8',
      'stone-950': '#0c0a09',
      'green-500': "#22c55e",
      'white':"#FFFFFF",
      'gray-200':"#e5e7eb"
    },
    extend: {},
  },
  plugins: [],
}

