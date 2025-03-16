import { ContentHome } from '@/components/home/content/ContentHome'
import { HeroHome } from '@/components/home/hero/HeroHome'

export default async function Home() {
  return (
    <div className='home'>
      <section className='hero-home light sticky left-0 top-0 min-h-[100dvh] w-full'>
        <HeroHome />
      </section>
      <section className='relative grid min-h-[100dvh] w-full place-items-center overflow-hidden bg-white px-2 py-24 shadow-y-section sm:px-6'>
        <ContentHome />
      </section>
    </div>
  )
}
