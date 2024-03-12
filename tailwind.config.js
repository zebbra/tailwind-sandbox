/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
  "./**/*.{html,js}",
  "./components/**/*.{html,js}"],
  plugins: [require("daisyui")],
  // config docs: https://daisyui.com/docs/config/
  theme: {
    extend: {
      screens: {
        "3xl": "1850px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#b7ffab',
          'primary-focus': '#B6FFAB',
          'primary-content': '#1f2329',
          'secondary': '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2ba69a',
          'accent-content': '#ffffff',
          'neutral': '#1f2329',
          'neutral-focus': '#353D48',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#F9FAFA',
          'base-300': '#EEEFEF',
          'base-content': '#1f2329',
          'info': '#8BAED9',
          'success': '#95d98a',
          'warning': '#D9BD8B',
          'error': '#e11d48',
        },
      },
      "dark",
    ],
  },
};
