import { ServiceItem } from '@/components/services/ServiceItem'

export type Service = {
  id: number
  type: 'Mensual' | 'Semanal' | 'Libre'
  name: string
  price: number
  color: string
  description: string
  image: string
  altImage: string
}

const services: Service[] = [
  {
    id: 1,
    type: 'Mensual',
    name: '2 Sesiones presenciales',
    price: 50,
    color: '#f4feff',
    description:
      'Si te sabe a poco una sesión, ahora puedes venir a dos sesiones de yoga presencial para profundizar en las posturas, mejorar tu técnica y completar así tu práctica.',
    image: '/images/yoga-services-04.svg',
    altImage: 'Sesiones presenciales',
  },
  {
    id: 2,
    type: 'Libre',
    name: 'Sesión suelta',
    price: 12,
    color: '#f0f3fc',
    description:
      'Puedes acceder a clases sueltas cuando lo desees, adaptándolas a tu ritmo y disponibilidad. Consulta los horarios y las plazas disponibles para reservar tu momento de yoga.',
    image: '/images/yoga-services-02.svg',
    altImage: 'Sesión suelta',
  },
  {
    id: 3,
    type: 'Libre',
    name: 'Sesión particular',
    price: 30,
    color: '#fff4ff',
    description:
      'Si necesitas una atención personalizada para trabajar juntas en algún aspecto que quieras sanar, potenciar o mejorar, las clases particulares son tu mejor opción para avanzar a tu propio ritmo.',
    image: '/images/yoga-services-03.svg',
    altImage: 'Sesión particular',
  },
  {
    id: 4,
    type: 'Mensual',
    name: 'Sesión online',
    price: 25,
    color: '#f8ffef',
    description:
      'Disfruta de la práctica de yoga desde donde tú quieras, adaptándola a tu ritmo y necesidades, sin horarios ni estrés, para conectar contigo mismo en cualquier momento del día.',
    image: '/images/yoga-services-01.svg',
    altImage: 'Sesión online',
  },
  {
    id: 5,
    type: 'Mensual',
    name: 'Talleres mensuales',
    price: 15,
    color: '#f8ecec',
    description:
      'Cada mes te ofrecemos una propuesta especial para profundizar en un tema específico de yoga, diseñada con dedicación. Además, las alumnas inscritas en la Escuela disfrutan de un precio exclusivo para participar.',
    image: '/images/yoga-services-06.svg',
    altImage: 'Talleres mensuales',
  },
  {
    id: 6,
    type: 'Semanal',
    name: 'Sesión presencial',
    price: 30,
    color: '#fff9ef',
    description:
      'Cada semana podrás disfrutar de una práctica completa de yoga, donde trabajaremos posturas para fortalecer y flexibilizar tu cuerpo, técnicas de respiración para calmar tu mente y meditación para conectar con tu interior.',
    image: '/images/yoga-services-05.svg',
    altImage: 'Sesión presencial',
  },
]

export const OurServices = () => {
  return (
    <ul className='services gap-2 px-1 max-lg:space-y-8 lg:grid lg:h-[150vh] xl:h-[125vh] lg:grid-cols-10 lg:grid-rows-5 xl:gap-4'>
      {services.map((service) => (
        <ServiceItem
          key={service.id}
          service={service}
        />
      ))}
    </ul>
  )
}
