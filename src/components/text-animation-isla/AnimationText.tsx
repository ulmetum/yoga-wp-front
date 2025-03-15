import { AnimationIsla } from '@/components/text-animation-isla/AnimationIsla'
import { AnimationYoga } from '@/components/text-animation-isla/AnimationYoga'

export const AnimationText = () => {
  return (
    <div className='flex justify-center scale-110'>
      <div className='relative h-[100px] overflow-hidden flex justify-center items-center'>
        <div className='flex items-center justify-center relative'>
          <div className='overflow-hidden relative'>
            <AnimationIsla text='isla' />
            <AnimationYoga
              text='yoga'
              classNames='absolute w-full h-full top-0 left-0 '
            />
          </div>
        </div>
      </div>
    </div>
  )
}
