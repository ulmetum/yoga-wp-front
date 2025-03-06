import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'landscape-sm': {
          raw: '(max-width: 667px) and (orientation: landscape)',
        },
        'landscape-xl': {
          raw: '(max-width: 910px) and (orientation: landscape)',
        },
        'max-w-lg': {
          raw: '(max-width: 1024px)',
        }, // Define la media query personalizada
        'max-w-xl': {
          raw: '(max-width: 1280px)',
        }, // Define la media query personalizada
      },
      colors: {
        primary: '#b45309',
        secondary: '#082f49',
        dark: '#18181b',
        light: '#f6f2ef',
      },
      fontFamily: {
        body: ['var(--font-body)'],
        headings: ['var(--font-headings)'],
      },
    },
  },
  plugins: [],
} satisfies Config
