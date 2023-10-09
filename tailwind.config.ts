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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'purple-cv': '#F0F0F6',
        'white-cv': '#FFFFFF',
        'orange-cv': '#FFB400',
        'blue-black': '#2F2E33',
        'cool-gray': '#D5D6D2',
        'cobalt': '#3A5199',
        'deep-purple': '#363237',
        'indigo': '#2D4262',
        'taupe': '#73605B',

        'blue-topaz': '#6EB5C0',
        'cerulean': '#006C84',
        'icicle': '#E2E8E4',

        
        
      },
      
    },
  },
  plugins: [],
}
export default config
