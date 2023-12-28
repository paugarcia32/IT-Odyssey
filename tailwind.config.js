import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,md}',
    './components/**/*.{js,ts,jsx,tsx,mdx,md}',
    './app/**/*.{js,ts,jsx,tsx,mdx,md}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
       fontFamily:{
          body: ['Montserrat'],
          title: ['Roboto Slab']
        },
    },
    plugins: [],
  },
  darkMode: "class",
    plugins: [
      require('@tailwindcss/typography'),
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#add7d7",
              foreground: "#11100e",
            },
            secondary: {
              DEFAULT: "#ecebed",
            },
            background: {
              DEFAULT: "#f5f5f5",
              foreground: "#000000",
            },
            accent: {
              DEFAULT: "#55aaaa",
              foreground: "#000000",
            },
          }
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#add7d7",
              foreground: "#11100e",
            },
            secondary: {
              DEFAULT: "#201e22",
            },
            background: {
              DEFAULT: "#11100e",
              foreground: "#000000",
            },
            accent: {
              DEFAULT: "#99cccc",
              foreground: "#000000",
            },
          }
        },

      },
    }),
  ],
}
