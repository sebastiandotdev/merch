import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/static/header_bg.svg')",
      },
      },
      fontFamily: {
        'amiko': ['Amiko', 'sans-serif'],
      }
    },
  plugins: [],
}
export default config
