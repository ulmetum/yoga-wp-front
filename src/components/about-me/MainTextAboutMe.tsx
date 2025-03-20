export const MainTextAboutMe = () => {
  return (
    <div className='relative z-10 flex min-h-[30vh] flex-col items-center rounded-lg px-4 py-32 max-xl:bg-white/35 max-xl:shadow-[0_0_15px_rgba(255,255,255,0.5)] max-xl:backdrop-blur-sm sm:px-12 xl:bg-white/0'>
      <div className='mb-8 w-full'>
        <h2 className='text-5xl'>Mis habilidades</h2>
        <div>
          <span className='text-sm'>/</span>
          <span className='text-primary text-base'> Biografía </span>{' '}
          <span className='text-sm'>/</span>
        </div>
      </div>
      <div className='space-y-4'>
        <p className='leading-normal sm:text-[1.35rem] lg:text-2xl'>
          Desde hace más de una década he podido ver cómo muchas personas han
          sufrido una transformación a través del yoga, consiguiendo sentirse
          mucho mejor consigo mismas y con su entorno.
        </p>
        <p className='leading-normal sm:text-[1.35rem] lg:text-2xl'>
          Soy licenciada en Humanidades y, a lo largo de los años, me he formado
          en diversos estilos de yoga (Anusara, terapéutico, aéreo) y meditación
          por la escuela de Satyananda. Además, he explorado otras disciplinas
          como Reiki, danza y teatro, lo que me permite ofrecerte una
          experiencia más enriquecedora. Mi objetivo es ayudarte a descubrir y
          potenciar todo lo que ya habita en tu interior.
        </p>
        <p className='leading-normal sm:text-[1.35rem] lg:text-2xl'>
          ¡Un centenar de personas ya han pasado por mis talleres y cursos
          quedando plenamente satisfechas!.
        </p>
        <p className='leading-normal sm:text-[1.35rem] lg:text-2xl'>
          Anímate y practica conmigo también en nuestra escuela online.
        </p>
      </div>
    </div>
  )
}
