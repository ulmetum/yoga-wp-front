import type { Metadata } from 'next'
import './globals.css'
import { fontBody, fontHeadings } from '@/fonts'
import { MainHeader } from '@/components/header/MainHeader'
import { ViewTransitions } from 'next-view-transitions'
import { MainFooter } from '@/components/footer/MainFooter'
import { ScrollLayout } from '@/layouts/ScrollLayout'
import { ScrollTop } from '@/components/ScrollTop'
import { FRONTEND_BASE_URL } from '@/config'
import { MagneticButton } from '@/components/MagneticButton'

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_BASE_URL!),
  title: 'La Isla del Yoga - Blog sobre Yoga y Bienestar',
  description:
    'Descubre consejos, prácticas y filosofía del yoga en La Isla del Yoga. Un espacio para el bienestar, la relajación y el crecimiento personal.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang='es'>
        <ScrollTop />
        <body
          className={`${fontHeadings.variable} ${fontBody.variable} antialiased `}
        >
          <ScrollLayout>
            <MainHeader />
            <main>
              {children}
              <MagneticButton size='sm' />
            </main>
            <MainFooter />
          </ScrollLayout>
        </body>
      </html>
    </ViewTransitions>
  )
}
