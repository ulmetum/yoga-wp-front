import { Container } from '@/components/Container'
import { MenuFooter } from '@/components/footer/MenuFooter'
import { CopyClipboard } from '@/components/footer/CopyClipboard'
import { AnimationText } from '@/components/text-animation-isla/AnimationText'

export const MainFooter = () => {
  return (
    <footer
      className='main-footer light relative h-[900px] md:h-[700px] xl:h-[500px]'
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className='main-footer-wrapper relative -top-[100vh] h-[calc(100vh+900px)] md:h-[calc(100vh+700px)] xl:h-[calc(100vh+500px)]'>
        <div className='main-footer-inner sticky top-[calc(100vh-900px)] h-[900px] md:top-[calc(100vh-700px)] md:h-[700px] xl:top-[calc(100vh-500px)] xl:h-[500px]'>
          <Container classNames='h-full'>
            <div className='flex h-full flex-col justify-between gap-4 px-2 py-10 sm:px-6'>
              <div className='flex flex-col gap-10 md:flex-row'>
                <MenuFooter />
                <h2 className='text-5xl font-normal uppercase md:w-2/5'>
                  Ponte en contacto conmigo
                </h2>
              </div>
              <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
                <p className='text-sm max-lg:mx-auto max-lg:text-center sm:w-1/2 lg:w-1/3'>
                  Muchas gracias por llegar hasta aquí. Si tienes alguna
                  pregunta o duda, no dudes en ponerte en contacto conmigo.
                  Estaré encantada de ayudarte.
                </p>
                <CopyClipboard color='amber' />
              </div>
              <AnimationText />
              <div className=''>
                <p className='flex items-center justify-center gap-1 font-headings text-base md:text-xl'>
                  <span className='font-headings text-base text-dark md:text-xl'>
                    © {new Date().getFullYear()} Ulmetum.
                  </span>
                  <span className='text-primary font-headings text-base md:text-xl ml-1'>
                    laisladelyoga.com
                  </span>
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  )
}
