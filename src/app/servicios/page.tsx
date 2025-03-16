import { Container } from '@/components/Container'
import { OurServices } from '@/components/services/OurServices'
import { TimeTable } from '@/components/services/TimeTable'

export default function Page() {
  return (
    <div className='bg-white pt-[calc(var(--main-header-height))] shadow-y-section '>
      <Container classNames='space-y-8'>
        <section className='mx-2 flex min-h-screen flex-col items-center justify-center'>
          <div className='schedule mb-8'>
            <h2 className='mb-8 text-center font-normal'>Horarios de clases</h2>
            <p>
              Consulta nuestros horarios detallados y selecciona el que mejor se
              ajuste a tus necesidades. Contamos con sesiones regulares durante
              toda la semana y opciones flexibles para que encuentres el momento
              ideal para practicar. Ya sea que prefieras empezar el día con
              energía o relajarte por la tarde, tenemos un horario pensado para
              ti.
            </p>
            <p>
              ¡Te esperamos para compartir juntos esta experiencia de bienestar
              y equilibrio!
            </p>
          </div>
          <TimeTable />
        </section>
        <section className='mx-2 flex min-h-screen flex-col items-center justify-center'>
          <div className='prices mb-12'>
            <h2 className='my-12 text-center font-normal xl:mt-0'>
              Precios / Servicios
            </h2>
            <p>
              Ofrecemos diferentes modalidades para que adaptes tu práctica de
              yoga a tu estilo de vida: clases presenciales para profundizar en
              las posturas, sesiones sueltas según tu disponibilidad, clases
              particulares personalizadas, sesiones online para practicar a tu
              ritmo y talleres mensuales para profundizar en temas específicos.
            </p>
          </div>
          <OurServices />
        </section>
        <p className='mx-auto pb-8 text-sm max-lg:max-w-2xl'>
          <span className='text-sm'>*</span> Iconos por{' '}
          <span className='text-sm text-primary'>Alice Noir</span> de{' '}
          <a
            className='text-primary hover:underline'
            href='https://thenounproject.com/creator/AliceNoir/'
            target='_blank'
            title='iconos'
          >
            Noun Project
          </a>{' '}
          (CC BY 3.0)
        </p>
      </Container>
    </div>
  )
}
