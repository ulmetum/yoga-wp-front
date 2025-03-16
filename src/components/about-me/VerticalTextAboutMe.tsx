import { cn } from '@/utils/mergeClass'

interface Props {
  text: string
  classNames?: string
  year: number
}

export const VerticalTextAboutMe = ({ classNames, text, year }: Props) => {
  return (
    <div className={cn('absolute left-12 z-20 md:left-0 ', classNames)}>
      <div className='w-36 md:-rotate-90'>
        <p className='font-heading font-normal text-primary'>({year})</p>
        <h5 className='my-1'>{text}</h5>
      </div>
    </div>
  )
}
