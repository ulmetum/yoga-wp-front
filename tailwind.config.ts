import type { Config } from 'tailwindcss'
import containerQueries from '@tailwindcss/container-queries'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        'max-sm': {
          raw: ` (max-width: ${defaultTheme.screens.sm})`,
        },
        'max-md': {
          raw: ` (max-width: ${defaultTheme.screens.md})`,
        },
        'max-lg': {
          raw: ` (max-width: ${defaultTheme.screens.lg})`,
        },
        'max-xl': {
          raw: ` (max-width: ${defaultTheme.screens.xl})`,
        },
        'max-2xl': {
          raw: ` (max-width: ${defaultTheme.screens['2xl']})`,
        },
        'landscape-sm': {
          raw: '(max-width: 667px) and (orientation: landscape)',
        },
        'landscape-xl': {
          raw: '(max-width: 910px) and (orientation: landscape)',
        },
      },
      boxShadow: {
        'b-section': '0px 10px 20px -20px var(--dark)',
        'y-section':
          '0px -10px 20px -20px var(--dark), 0px 10px 20px -20px var(--dark)',
      },
      colors: {
        primary: '#b45309',
        secondary: '#082f49',
        dark: '#18181b',
        light: '#f6f2ef',
        turquoise: '#349098',
        'purple-pale': '#b06dcc',
        'sky-pale': '#61bbf7',
      },
      fontFamily: {
        body: ['var(--font-body)'],
        headings: ['var(--font-headings)'],
        hand: ['var(--font-hand)'],
      },
    },
  },
  plugins: [containerQueries],
} satisfies Config
