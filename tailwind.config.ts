import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(0px)'},
          '50%': { transform: 'translateX(200px)' },
          '100%': { transform: 'translateX(400px)' },
        }
      },
      animation: {
        wiggle: 'wiggle 2s linear infinite',
      }
    },
  },
  plugins: [],
}
export default config
