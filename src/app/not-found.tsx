// import { MenuNotFound } from '@/components/menuNotFound'

import { Link } from 'next-view-transitions'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className='min-h-[100dvh] flex items-center justify-start overflow-hidden '>
      <div
        style={{ backgroundImage: `url('/images/404-image.webp')` }}
        className='absolute shadow-y-section w-full h-screen left-0 top-0 bg-cover bg-center bg-no-repeat p-8 xl:justify-center'
      ></div>
      <div className='absolute inset-0 bg-light/80 backdrop-blur-sm ' />
      <div className='min-h-screen pt-[calc(var(--main-header-height))] relative w-[min(100%,640px)] mx-auto flex flex-col items-center justify-center'>
        <div className='my-6 text-9xl font-light tracking-widest text-light'>
          <span className='text-[120px] md:text-[200px]'>4</span>
          <span className='relative w-24 h-24 md:w-36 md:h-36 inline-block'>
            <Image
              alt='Imagen 404'
              src='/images/tree-yoga.svg'
              fill
            />
          </span>
          <span className='text-[120px] md:text-[200px]'>4</span>
        </div>
        <div className='px-2 sm:px-4'>
          <p className='font-headings text-4xl my-4 lg:my-6 text-dark md:text-5xl'>
            No hay nada aquí...
          </p>
          <p className='font-headings text-4xl my-4 lg:my-6 text-dark md:text-5xl'>
            ...o puede que lo que buscabas jamás existió y te has tropezado con
            un vasto y eterno vacío...
          </p>
        </div>
        <div>
          <h2 className=' text-primary'>¿Qué puedes hacer?</h2>
          <ul className='custom-list'>
            <li>Reflexionar sobre la insignificancia de la existencia</li>
            <li>
              <Link
                href='/'
                className='relative before:absolute before:bottom-0 before:left-1/2 hover:text-primary before:w-0 hover:before:w-full hover:before:left-0 before:transition-all before:duration-300 before:h-[1px] transition-colors duration-300 before:bg-primary'
              >
                Regresar a la página principal
              </Link>
            </li>
          </ul>
        </div>
        {/* <MenuNotFound /> */}
      </div>
    </div>
  )
}
