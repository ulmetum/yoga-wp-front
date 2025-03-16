export const Marquee = () => {
  return (
    <div className='fadeout-horizontal marquee relative flex'>
      <div className='flex animate-marquee items-center whitespace-nowrap'>
        <p className='font-heading text-2xl'>+10 años de experiencia</p>
        <span className='mx-2 text-sm text-primary'>✫</span>
        <p className='font-heading text-2xl'>Compromiso y apoyo</p>
        <span className='mx-2 text-sm text-primary'>✫</span>
        <p className='font-heading text-2xl'>Dedicación y progreso continuo</p>
        <span className='mx-2 text-sm text-primary'>✫</span>
        <p className='font-heading text-2xl'>Asesoramiento personalizado</p>
        <span className='mx-2 text-sm text-primary'>✫</span>
      </div>

      <div className='absolute top-0 flex animate-marquee2 items-center whitespace-nowrap'>
        <p className='font-heading text-2xl'>+10 años de experiencia</p>
        <span className='mx-2 text-sm text-primary'>✫</span>
        <p className='font-heading text-2xl'>Compromiso y apoyo</p>
        <span className='mx-2 text-sm text-primary'>✫</span>
        <p className='font-heading text-2xl'>Dedicación y progreso continuo</p>
        <span className='mx-2 text-sm text-primary'>✫</span>
        <p className='font-heading text-2xl'>Asesoramiento personalizado</p>
        <span className='mx-2 text-sm text-primary'>✫</span>
      </div>
    </div>
  )
}
