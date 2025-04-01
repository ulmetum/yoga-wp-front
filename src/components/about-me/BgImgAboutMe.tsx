import Image from 'next/image'

export const BfgImgAboutMe = () => {
  return (
    <div className='relative h-full w-full'>
      <Image
        className='absolute left-[2.5%] top-[2.5%] h-[95%] w-[95%] -scale-x-100 object-cover blur-md grayscale-[55%] '
        src='/images/perfil.webp'
        priority
        alt='Perfil'
        width={300}
        height={600}
      />

      <div className='absolute inset-0 bg-secondary/20 mix-blend-multiply blur-md'></div>
      <div className='absolute inset-0 bg-light/75 blur-md'></div>
    </div>
  )
}
