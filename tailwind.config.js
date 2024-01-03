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
              '50': '#f2f9f8',
              '100': '#deefee',
              '200': '#add7d7',
              '300': '#95cbcb',
              '400': '#62acae',
              '500': '#479093',
              '600': '#3e767c',
              '700': '#376267',
              '800': '#335257',
              '900': '#2e464b',
              '950': '#1b2d31',
            },
            secondary: {
              DEFAULT: "#edecee",
              '50': '#f7f7f7',
              '100': '#edecee',
              '200': '#dfdde0',
              '300': '#c8c5cb',
              '400': '#aca8b2',
              '500': '#99939e',
              '600': '#89828e',
              '700': '#7c7580',
              '800': '#68626b',
              '900': '#565157',
              '950': '#363437',
            },
            background: {
              DEFAULT: "#f1f0ee",

            },
            accent: {
              DEFAULT: "#55aaaa",
              '50': '#f3faf9',
              '100': '#d8efed',
              '200': '#b0dfdc',
              '300': '#81c7c5',
              '400': '#55aaaa',
              '500': '#3d8e8f',
              '600': '#2e7073',
              '700': '#285b5d',
              '800': '#24494b',
              '900': '#223d3f',
              '950': '#0f2124',
            },
          }
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#285252",
              '50': '#f3faf8',
              '100': '#d8efeb',
              '200': '#b0dfd9',
              '300': '#81c7c1',
              '400': '#57aaa5',
              '500': '#3d8f8b',
              '600': '#2f7270',
              '700': '#295c5b',
              '800': '#285252',
              '900': '#223f3f',
              '950': '#0f2324',
            },
            secondary: {
              DEFAULT: "#181716",
              '50': '#f7f7f8',
              '100': '#efeef0',
              '200': '#dcd9de',
              '300': '#bcb8c1',
              '400': '#96919f',
              '500': '#7a7483',
              '600': '#635e6b',
              '700': '#514d57',
              '800': '#46424a',
              '900': '#3d3a40',
              '950': '#121113',
            },
            background: {
              DEFAULT: "#11100e",
            },
            accent: {
              DEFAULT: "#55aaaa",
              '50': '#f3faf9',
              '100': '#d8efed',
              '200': '#b0dfdc',
              '300': '#81c7c5',
              '400': '#55aaaa',
              '500': '#3d8e8f',
              '600': '#2e7073',
              '700': '#285b5d',
              '800': '#24494b',
              '900': '#223d3f',
              '950': '#0f2124',
            },
          }
        },

      },
    }),
  ],
}
