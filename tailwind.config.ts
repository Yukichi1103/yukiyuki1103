import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f9',
          100: '#e1e9f2',
          200: '#c3d3e5',
          300: '#a5bdd8',
          400: '#87a7cb',
          500: '#1e3a8a',
          600: '#1a3077',
          700: '#152665',
          800: '#101c52',
          900: '#0b1240',
        },
      },
    },
  },
  plugins: [],
}
export default config
