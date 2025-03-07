import { Oswald, Shadows_Into_Light, Ubuntu } from 'next/font/google'

export const fontBody = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-body',
  display: 'fallback',
})

export const fontHeadings = Oswald({
  subsets: ['latin'],
  weight: ['400', '300'],
  variable: '--font-headings',
  display: 'fallback',
})

export const shadowIntoLight = Shadows_Into_Light({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-hand',
  display: 'fallback',
})
