import type { Config } from 'tailwindcss'
import containerQueries from '@tailwindcss/container-queries'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    '.wp-block-columns',
    '.wp-block-quote',
    '.wp-block-quote-author',
    '.wp-block-pullquote',
    '.wp-block-media-text',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
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
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        fadeIn: 'fadeIn 1.5s ease-in-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    containerQueries,
    function ({
      addVariant,
    }: {
      addVariant: (name: string, rule: string) => void
    }) {
      addVariant('max-sm', '@media (max-width: 639px)')
      addVariant('max-md', '@media (max-width: 767px)')
      addVariant('max-lg', '@media (max-width: 1023px)')
      addVariant('max-xl', '@media (max-width: 1279px)')
      addVariant('max-2xl', '@media (max-width: 1439px)')
      addVariant(
        'landscape-sm',
        '@media (max-width: 667px) and (orientation: landscape)'
      )
      addVariant(
        'landscape-xl',
        '@media (max-width: 910px) and (orientation: landscape)'
      )
    },
  ],
} satisfies Config
